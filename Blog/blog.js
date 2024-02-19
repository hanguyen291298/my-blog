const toggleButton = document.querySelector(".toggle-button")
document.querySelector(".toggle-button").addEventListener("click", ()=>{
    document.body.classList.toggle("light")
    if (document.body.classList.contains("light")){
        toggleButton.innerHTML = "Light On"
    }
    else{
        toggleButton.innerHTML = "Light Off"
    }
})