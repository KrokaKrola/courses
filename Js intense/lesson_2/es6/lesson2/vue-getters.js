/* global document */
export default class VueGetters {
    constructor(settings) {
        this.$el = document.querySelector(settings.el);
        this.$template = settings.template;
        this.$data = settings.data;
        this.data = {};
        for (let name in this.$data) {
            Object.defineProperty(this.data, name, {
                get: () => {
                    return this.$data[name];
                },
                set: (value) => {
                    console.log(this);
                    this.$data[name] = value;
                    this.render();
                }
            })
        }
        this.render();
    }

    render() {
        let html = this.$template.replace(/{{(.*?)}}/g, (match, name) => {
            let key = name.trim();
            return this.$data[key];
        })
        this.$el.innerHTML = html;
    }
}