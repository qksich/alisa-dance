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
