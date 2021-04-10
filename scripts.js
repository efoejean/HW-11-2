const p = document.querySelector('p');

document
  .querySelector('input[type="text"]')
  .addEventListener('keyup', event => {
    p.innerHTML = event.target.value;
  });
document
  .querySelector('input[type="color"]')
  .addEventListener('input', event => {
    p.style.color = event.target.value;
  });
