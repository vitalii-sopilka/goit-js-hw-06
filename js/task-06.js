const inputEl = document.querySelector("#validation-input");

// const onInputBlur = () => {
//   if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
//     inputEl.classList.remove('invalid');
//     inputEl.classList.add('valid');
//   } else {
//     inputEl.classList.remove('valid');
//     inputEl.classList.add('invalid');
//   }
// };

const applyValidationClass = (addClass, removeClass) => {
  inputEl.classList.remove(removeClass);
  inputEl.classList.add(addClass);
};

const onInputBlur = () => {
  const expectedLength = Number(inputEl.dataset.length);
  const currentLength = Number(inputEl.value.length);

  if (currentLength === expectedLength) {
    applyValidationClass('valid', 'invalid');
  } else {
    applyValidationClass('invalid', 'valid');
  }
};

inputEl.addEventListener('blur', onInputBlur);
