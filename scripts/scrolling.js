export const revealOnScroll = () => {
    const contents = document.querySelectorAll('.content')
    const windowHeight = window.innerHeight
    const revealPoint = 150
    contents.forEach(content => {
        const contentTop = content.getBoundingClientRect().top

        if (contentTop < windowHeight - revealPoint) {
            content.classList.add('show')
        } else {
            content.classList.remove('show')
        }
    })
}

