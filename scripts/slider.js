const slider = document.querySelector('.wrapper')
const slide = document.querySelectorAll('.slide')
let currentIndex = 0

export const slideMovement = () => {
    const slideWidth = slide[0].offsetWidth
    currentIndex++
    if (currentIndex >= slide.length) {
        currentIndex = 0
        slider.style.transform = `translateX(0)`
    } else {
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }
    
}

