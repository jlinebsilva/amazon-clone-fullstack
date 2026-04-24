const TABLET = 768
const LAPTOP = 992
const DESKTOP = 1200


export function checkViewport() {
    if (window.innerWidth <= TABLET) {
        return 'mobile'

    } else if (window.innerWidth > TABLET) {
        return 'tablet'

    } else if (window.innerWidth <= LAPTOP) {
        return 'laptop'

    } else {
        return 'desktop'
    }
}