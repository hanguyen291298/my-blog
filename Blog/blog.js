const body = document.querySelector("body")

document.querySelector(".toggle-button").addEventListener("click", ()=>{
    body.classList.toggle("dark")
    console.log("dark")
})