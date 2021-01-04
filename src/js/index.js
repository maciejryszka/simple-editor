import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const textarea = document.querySelector(".form__text--js");
const loadButton = document.querySelector(".load--js");
const saveButton = document.querySelector(".save--js");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("text", textarea.value);
});

loadButton.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("text");
});

console.log(textarea.value);
