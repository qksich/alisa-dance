const openFormButton = document.querySelectorAll('.reg-form')
const closeFormButton = document.querySelector('.close-form')
const modalForm = document.getElementById('modal-form')
const sendFormButton = document.querySelector('.send-form')
const openGalleryButton = document.querySelector('.gallery-button')
const modalGallery = document.getElementById('modal-gallery')
const closeGalleryButton = document.querySelector('.close-gallery')

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
    openGalleryButton.addEventListener('click', () => {
        modalGallery.showModal()
        modalGallery.focus()
        document.body.style.overflow = 'hidden'
    })
    closeGalleryButton.addEventListener('click', () => {
        modalGallery.close()
        document.body.style.overflow = ''
    })
}

