export class Select {
    constructor(selector, option) {
        this.el = document.querySelector(selector)

        this.#setup();
    }

    // #render() {
    //     this.el.innerHTML = 
    // }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.el.addEventListener('click', this.clickHandler)
    }

    clickHandler(event) {
        console.log(event);
    }

    open() {
        this.el.classlist.add('open')
    }

    close() {
        this.el.classlist.remove('open')
    }

    destroy() {
        this.el.removeEventListener('click', this.clickHandler)
    }
}
