const DROPDOWN = document.querySelector(".dropdown")
const CLOSE_BUTTON = document.querySelector(".close-button")
const TOUCH_BUTTON = document.querySelector(".touch-button")

CLOSE_BUTTON.addEventListener("click", () => {
    DROPDOWN.setAttribute("style", "visibility: hidden")
})

TOUCH_BUTTON.addEventListener("click", () => {
    DROPDOWN.setAttribute("style", "visibility: visible")
})

