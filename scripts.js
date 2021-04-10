const p = document.querySelector('p');

document
  .querySelector('input[type="text"]')
  .addEventListener('keyup', event => {
    p.innerHTML = event.target.value;
  });
