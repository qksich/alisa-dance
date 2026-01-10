export class CookieAgreement {
    selectors = {
        root: '[data-js-cookie]',
        buttonAccept: '[data-js-accept]',
        buttonReject: '[data-js-reject]',
    }
    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.buttonAcceptElement = document.querySelector(this.selectors.buttonAccept)
        this.buttonRejectElement = document.querySelector(this.selectors.buttonReject)
        this.stateAgreement = false
        this.checkCookies()
        if (this.stateAgreement) {
            this.rootElement.style.display = 'none'
        } else {
            this.rootElement.style.display = 'flex'
        }
        this.bindEvents()
    }
    acceptCookies() {
        this.rootElement.style.display = 'none'
        document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"
    }
    rejectCookies() {
        this.rootElement.style.display = 'none'
    }
    checkCookies() {
        const cookies = document.cookie
        const isAccepted = cookies.split('; ').some(item => item.startsWith('cookiesAccepted='))
        this.stateAgreement = isAccepted
    }
    bindEvents() {
        this.buttonAcceptElement.addEventListener('click', () => this.acceptCookies())
        this.buttonRejectElement.addEventListener('click', () => this.rejectCookies())
    }
}
