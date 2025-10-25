const openFormButton = document.querySelectorAll('.reg-form')
const closeFormButton = document.querySelector('.close')
const modalForm = document.getElementById('modal-form')
const sendFormButton = document.querySelector('.send-form')

export const formOpenClose = () => {
    openFormButton.forEach(button => {
        button.addEventListener('click', () => {
            modalForm.showModal()
            modalForm.focus()
            document.body.style.overflow = 'hidden'
        })
    })
    closeFormButton.addEventListener('click', () => {
        modalForm.close() 
        document.body.style.overflow = ''
    })
    sendFormButton.addEventListener('click', (event) => {
        event.preventDefault
        modalForm.close() 
    })
}

