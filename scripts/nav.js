export const navigationActions = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const navMap = {
            '.about-btn': '#about',
            '.directions-btn': '#directions',
            '.schedule-btn': '#schedule',
            '.contacts-btn': '#registration'
        }
        Object.entries(navMap).forEach(([buttonSelector, targetSelector]) => {
            const button = document.querySelector(buttonSelector)
            const target = document.querySelector(targetSelector)
            if (button && target) {
                button.addEventListener('click', () => {
                    target.scrollIntoView({ block: 'start' })
                })
            }
        })
    })
}

