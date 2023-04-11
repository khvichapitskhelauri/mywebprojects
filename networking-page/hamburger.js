const hamburgerMenu = document.querySelector(".hamburger-menu");
const burgerBar = document.querySelector(".burger-bar");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    burgerBar.classList.toggle("active");
})

document.querySelectorAll("burger-bar-li").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    burgerBar.classList.remove("active");
}))