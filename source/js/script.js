const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".nav__toggle");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("nav--closed");
  nav.classList.toggle("nav--opened");
});
