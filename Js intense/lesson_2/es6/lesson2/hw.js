/* global Proxy */
function watchObj(node, callback) {
    return new Proxy(node, {
        get: (target, name) => {
            switch (typeof target[name]) {
                case "object":
                    return watchObj(target[name], callback);
                case "function":
                    return target[name].bind(target);
                default:
                    return target[name];
            }
        },
        set: (target, name, value) => {
            target[name] = value;
            callback(value, name);
            return true;
        }
    });
}

class EmailParser {
    constructor(email) {
        this.email = email;

        // Object.defineProperty(this, "name", {
        //     return this.email.split("@")[0];
        // });
        // Object.defineProperty(this, "domain", {
        //     get() {
        //         return this.email.split("@")[1];
        //     }
        // });
        // Object.defineProperty(this, "isCorrect", {
        //     get() {
        //         return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(this.email);
        //     }
        // });
    }

    get name() {
        return this.isCorrect ? this.email.split("@")[0] : "email is not correct";
    }
    get domain() {
        return this.isCorrect ? this.email.split("@")[1] : "email is not correct";
    }
    get isCorrect() {
        return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(this.email);
    }
}

export {
    watchObj,
    EmailParser
};