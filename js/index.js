let navMenu = document.querySelector(".nav-items");
let hamburgerIcon = document.querySelector(".ham-icon");
let listItems = document.querySelectorAll(".nav-items li")

hamburgerIcon.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
})

listItems.forEach(e=>{
    e.addEventListener("click", ()=>{
        navMenu.classList.toggle("active");
        hamburgerIcon.classList.toggle("active");
    })
})