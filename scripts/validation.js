class FormsValidation {
    selectors = {
        dialog: '[data-js-form-dialog]',
        dialogForm: '[data-js-dialog-form]',
        fieldErrors: '[data-js-dialog-form-field-errors]'
    }

    errorMessages = {
        valueMissing: () => 'Пожалуйста, заполните это поле',
        patternMismatch: () => 'Данные не соответствуют формату',
        tooShort: () => 'Слишком короткое значение',
        tooLong: () => 'Слишком длинное значение',
    }

    constructor() {
        this.bindEvents()
    }

    manageErrors(fieldControlElement, errorMessages) {
        const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)
        if (!fieldErrorsElement) return
        fieldErrorsElement.innerHTML = errorMessages
            .map((message) => `<span class="field__errors">${message}</span>`)
            .join('')
    }

    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity
        const errorMessages = []

        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
            if (errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldControlElement))
            }
        })

        this.manageErrors(fieldControlElement, errorMessages)

        const isValid = errorMessages.length === 0

        fieldControlElement.ariaInvalid = !isValid

        return isValid
    }

    onBlur(event) {
        const { target } = event
        const isFormField = target.closest(this.selectors.dialogForm)
        const isRequired = target.required

        if (isFormField && isRequired) {
            this.validateField(target)
        }
    }

    onChange(event) {
        const isRequired = event.target.required
        const isToggleType = ['radio', 'checkbox'].includes(event.target.type)

        if (isToggleType && isRequired) {
            this.validateField(event.target)
        }
    }

    onSubmit(event) {
        event.preventDefault()
        const isFormElement = event.target.matches(this.selectors.dialogForm)

        if (!isFormElement) {
            return
        } 

        const requiredControlElements = [...event.target.elements].filter(({ required }) => required)
        let isFormValid = true

        requiredControlElements.forEach((element) => {
            const isFieldValid = this.validateField(element)

            if (!isFieldValid) {
                isFormValid = false
            }
        }) 

        if (isFormValid) {
            document.querySelector(this.selectors.dialog).close()
            this.sendToast()
        }
    }

    sendToast() {
        const toast = document.createElement('div')
        toast.classList.add('toast')
        toast.textContent = 'Форма успешно отправлена. Мы получили данные и свяжемся с вами'
        document.body.append(toast)
        requestAnimationFrame(() => {
            toast.classList.add('show')
        })
        setTimeout(() => {
            toast.classList.remove('show')
        }, 3000);
    }

    bindEvents() {
        document.addEventListener('blur', (event) => {
            this.onBlur(event)
        }, { capture: true })
        document.addEventListener('change', event => this.onChange(event))
        document.addEventListener('submit', event => this.onSubmit(event))
    }
}

export { FormsValidation }