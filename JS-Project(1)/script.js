let counter = document.querySelector("#count");

// --------increment-------------

function increment() {
  let value = parseInt(counter.innerText);
  value = value + 1;
  counter.innerText = value;
}

// --------------decrement------------

function decrement() {
  let value = parseInt(counter.textContent);
  value = value - 1;
  counter.textContent = value;
}
