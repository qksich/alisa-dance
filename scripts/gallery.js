const images = document.querySelectorAll('.photos img')

export const openPhoto = () => {
    images.forEach(img => {
        img.addEventListener('click', () => {
            const popup = document.createElement('div')
            popup.classList.add('photo-popup')
            popup.innerHTML = `<img src="${img.src}">`
            document.body.appendChild(popup)

            popup.addEventListener('click', () => popup.remove())
        })
    })
}

class Viewer {
    selectors = {
        photos: '[data-js-images]',
        dialogViewer: '[data-js-dialog-viewer]',
        viewer: '[data-js-viewer]',
        viewerButtonBack: '[data-js-viewer-back]',
        viewerButtonNext: '[data-js-viewer-next]',
        viewerButtonClose: '[data-js-viewer-close]',
        view: '[data-js-view]',
    }
    constructor() {
        this.photos = document.querySelector(this.selectors.photos)
        this.photosElements = this.photos.querySelectorAll('img')
        this.dialogViewerElement = document.querySelector(this.selectors.dialogViewer)
        this.viewerElement = document.querySelector(this.selectors.viewer)
        this.viewerButtonBackElement = document.querySelector(this.selectors.viewerButtonBack)
        this.viewerButtonNextElement = document.querySelector(this.selectors.viewerButtonNext)
        this.viewerButtonCloseElement = document.querySelector(this.selectors.viewerButtonClose)
        this.viewElement = document.querySelector(this.selectors.view)
        this.currentIndex = 0
        this.arrLength = this.photosElements.length - 1
        this.dialogViewerElement.close()
        this.bindEvents()
    }
    openPhoto(i) {
        const photo = this.photosElements[i].cloneNode(true)
        this.currentIndex = i
        this.dialogViewerElement.showModal()
        this.viewElement.appendChild(photo)
    }
    nextPhoto() {
        if (this.currentIndex >= this.arrLength) {
            this.currentIndex = 0
        } else {
            this.currentIndex++
        }
        const photo = this.photosElements[this.currentIndex].cloneNode(true)
        this.viewElement.innerHTML = `<div class="photos" data-js-view></div>`
        this.viewElement.appendChild(photo)
    }
    previousPhoto() {
        if (this.currentIndex <= 0) {
            this.currentIndex = this.arrLength
        } else {
            this.currentIndex--
        }
        const photo = this.photosElements[this.currentIndex].cloneNode(true)
        this.viewElement.innerHTML = `<div class="photos" data-js-view></div>`
        this.viewElement.appendChild(photo)
    }
    close() {
        this.currentIndex = 0
        this.dialogViewerElement.close()
        this.viewElement.innerHTML = `<div class="photos" data-js-view></div>`
    }
    bindEvents() {
        this.photosElements.forEach((photo, index) => {
            photo.addEventListener('click', () => {
                this.openPhoto(index)
            })
        })
        this.viewerButtonCloseElement.addEventListener('click', () => this.close())
        this.viewerButtonNextElement.addEventListener('click', () => this.nextPhoto())
        this.viewerButtonBackElement.addEventListener('click', () => this.previousPhoto())
    }
}

export { Viewer }