window.addEventListener("scroll", ()=>{
    const HEADER =  document.querySelector("header")
    HEADER.classList.toggle("sticky", window.scrollY > 0)
})