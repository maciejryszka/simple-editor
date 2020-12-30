import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const textarea = document.querySelector(".main__text--js");
const loadButton = document.querySelector(".main__button--load-js");
const saveButton = document.querySelector(".main__button--save-js");

saveButton.addEventListener("click", () => {
  localStorage.setItem("text", textarea.value);
});

loadButton.addEventListener("click", () => {
  textarea.value = localStorage.getItem("text");
});

console.log(textarea.value);
