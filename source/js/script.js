const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".nav__toggle");
nav.classList.add("nav--closed");
nav.classList.remove("nav--nojs");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("nav--closed");
  nav.classList.toggle("nav--opened");
});
