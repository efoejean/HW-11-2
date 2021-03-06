/* eslint-disable no-alert */
const root = document.querySelector(':root');
const p = document.createElement('p');
document.body.appendChild(p);

const minForm = document.querySelector('#min-font-form');
const maxForm = document.querySelector('#max-font-form');
const rangeInput = document.querySelector('input[type="range"]');
const minInput = document.querySelector('input[name="min"]');
const maxInput = document.querySelector('input[name="max"]');

minForm.addEventListener('submit', event => {
  event.preventDefault();
  if (minInput.value === '') {
    // eslint-disable-next-line no-alert
    alert('Please Enter a Minimum font');
    minInput.focus();
  } else if (minInput.value < 10) {
    // eslint-disable-next-line no-alert
    alert(' Error Minimum Font has to be greater than 10. Please reenter!');
    minInput.focus();
  } else {
    rangeInput.min = minInput.value;
  }
});

maxForm.addEventListener('submit', event => {
  event.preventDefault();
  if (maxInput.value === '') {
    alert('Please Enter a Maximum Font');
    maxInput.focus();
  } else if (maxInput.value > 150) {
    alert(' Error Maximum Font cannot be greater than 150. Please reenter!');
    maxInput.focus();
  } else {
    rangeInput.max = maxInput.value;
  }
});

document
  .querySelector('input[name="text"]')
  .addEventListener('keyup', event => {
    p.innerHTML = event.target.value;
  });
document
  .querySelector('input[type="color"]')
  .addEventListener('input', event => {
    root.style.setProperty('--color', `${event.target.value}`);
  });
rangeInput.addEventListener('input', event => {
  root.style.setProperty('--font-size', `${event.target.value}px`);
});
