function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

let size = 0;
let count = 0;
const elements = [];

const makeElementsClick = () => {
  const amountOfElements = Number(inputEl.value);

  for (let i = 0; i < amountOfElements; i += 1) {
    const divBox = document.createElement('div');

    size += size > 0 ? 10 : 30;

    divBox.style.width = `${size}px`;
    divBox.style.height = divBox.style.width;
    divBox.style.backgroundColor = getRandomHexColor();

    elements.push(divBox);

    console.group(`divBox ${++count}`);
    console.log(`size: ${size}x${size}px\nbgc: ${divBox.style.backgroundColor}`);
    console.groupEnd();
  }

  boxesEl.append(...elements);
};

const removeElementsClick = () => {
  boxesEl.innerHTML = '';
  size = 0;
  count = 0;
  console.clear();
};

createBtnEl.addEventListener('click', makeElementsClick);
destroyBtnEl.addEventListener('click', removeElementsClick);
