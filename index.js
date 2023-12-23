//CREATE AFFECTION TO MENU DROPDOWN
const DROPDOWN = document.querySelector(".dropdown")
const CLOSE_BUTTON = document.querySelector(".close-button")
const TOUCH_BUTTON = document.querySelector(".touch-button")
const PHONE_TOUCH_BUTTON = document.querySelector(".phone-menu")
const HEAD_CONTAINER = document.querySelector(".head-container")

CLOSE_BUTTON.addEventListener("click", () => {
    DROPDOWN.setAttribute("style", "visibility: hidden")
    HEAD_CONTAINER.setAttribute("style", "visibility: visible")
})

TOUCH_BUTTON.addEventListener("click", () => {
    DROPDOWN.setAttribute("style", "visibility: visible");
    HEAD_CONTAINER.setAttribute("style", "visibility: hidden")
})
PHONE_TOUCH_BUTTON.addEventListener("click", () => {
    DROPDOWN.setAttribute("style", "visibility: visible");
    HEAD_CONTAINER.setAttribute("style", "visibility: hidden")
})

// CREATE EFFECTION TO THE ANIMATION HEADER TEXT
const text = document.querySelector(".dynamic-text")

const textload = function(){
    setTimeout(()=>{
        text.textContent = " self-taught."
    }, 4002)
    setTimeout(()=>{
        text.textContent = "n inspier."
    }, 8004)
    setTimeout(()=>{
        text.textContent = " developer."
    }, 12006);
    setTimeout(()=>{
        text.textContent = " book lover."
    }, 16006)
}

textload()
setInterval(textload, 16006)
