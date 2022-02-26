const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");
burger.addEventListener("click", onBurgerClick);


function onBurgerClick (event){    
    const burger = event.target;
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
}

