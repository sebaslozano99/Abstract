const burger = document.querySelector(".burger");
const menu = document.querySelector(".second");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");    
})



document.querySelectorAll(".submit").forEach(n => n.addEventListener("click", () =>{
    burger.classList.remove("active");
    menu.classList.remove("active");
}))

document.querySelectorAll(".signIn").forEach(n => n.addEventListener("click", () =>{
    burger.classList.remove("active");
    menu.classList.remove("active");
}))