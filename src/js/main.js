let menu = document.querySelector("header nav ul");
let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-menu");

menuIcon.addEventListener("click", () => {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    document.body.classList.add("overflow-hidden");
});

closeIcon.addEventListener("click", () => {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
    document.body.classList.add("overflow-visible");
});
