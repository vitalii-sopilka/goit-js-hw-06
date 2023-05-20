const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function onMouseMove (event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
};

controlEl.addEventListener("input", onMouseMove)
