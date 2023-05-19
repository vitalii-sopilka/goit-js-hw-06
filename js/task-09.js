function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const buttonEl = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");

buttonEl.addEventListener('click', onRandomHexColor);

function onRandomHexColor() {
  const changeColor = getRandomHexColor();
  bodyColor.style.backgroundColor = changeColor;
  textColorEl.textContent = changeColor;
}
