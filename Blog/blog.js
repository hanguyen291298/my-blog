
const themesContainer = document.querySelector(".themes-container")
document.querySelector(".toggle-button").addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
    const currentRotation = parseInt(getComputedStyle(themesContainer).getPropertyValue('--rotation'))
    themesContainer.style.setProperty('--rotate', currentRotation + 180)
})