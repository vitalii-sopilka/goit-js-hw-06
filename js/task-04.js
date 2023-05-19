const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

const render = () => {
  refs.value.textContent = counterValue;
};

const onDecrement = () => {
  counterValue -= 1;
  render();
};

const onIncrement = () => {
  counterValue += 1;
  render();
};

refs.decrementBtn.addEventListener('click', onDecrement);
refs.incrementBtn.addEventListener('click', onIncrement);
