let some = {
    _private: {
        cnt: 3
    },
    min: 1,
    max: 10
};

Object.defineProperty(some, 'cnt', {
    // obj.cnt
    get() {
        return this._private.cnt;
    },
    //obj.cnt = value
    set(value) {
        if (value < this.min) {
            value = 1;
        }
        if (value > this.max) {
            value = 10;
        }
        this._private.cnt = value;
    }
})

export default some;