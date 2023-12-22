const DROPDOWN = document.querySelector(".dropdown")
const CLOSE_BUTTON = document.querySelector(".close-button")
const TOUCH_BUTTON = document.querySelector(".touch-button")
const HEAD_CONTAINER = document.querySelector(".head-container")

CLOSE_BUTTON.addEventListener("click", () => {
    DROPDOWN.setAttribute("style", "visibility: hidden")
    HEAD_CONTAINER.setAttribute("style", "visibility: visible")
})

TOUCH_BUTTON.addEventListener("click", () => {
    DROPDOWN.setAttribute("style", "visibility: visible");
    HEAD_CONTAINER.setAttribute("style", "visibility: hidden")
})

