//CREATE AFFECTION TO MENU DROPDOWN
const DROPDOWN = document.querySelector(".dropdown")
const CLOSE_BUTTON = document.querySelector(".close-btn")
const NAV_BUTTON = document.querySelector(".nav-btn")
const PHONE_NAV_BUTTON = document.querySelector(".phone-nav")
const HEADER_CONTAINER = document.querySelector(".header-container")

CLOSE_BUTTON.addEventListener("click", () => {
    DROPDOWN.style.display = "none"
    HEADER_CONTAINER.style.display = "flex"
})

NAV_BUTTON.addEventListener("click", () => {
    DROPDOWN.style.display = "block"
    HEADER_CONTAINER.style.display = "none"
})
PHONE_NAV_BUTTON.addEventListener("click", () => {
    DROPDOWN.style.display = "block"
    HEADER_CONTAINER.style.display = "none"
})

// CREATE EFFECTION TO THE ANIMATION HEADER TEXT
const text = document.querySelector(".dynamic-text")

const textload = function(){
    setTimeout(()=>{
        text.textContent = " a self-taught."
    }, 4000)
    setTimeout(()=>{
        text.textContent = " an inspier."
    }, 8000)
    setTimeout(()=>{
        text.textContent = " a developer."
    }, 12000);
    setTimeout(()=>{
        text.textContent = " a book lover."
    }, 16000)
}

textload()
setInterval(textload, 16000)


