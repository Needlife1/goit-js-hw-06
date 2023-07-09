const refs = {
  btnDecrement: document.querySelector("button[data-action= decrement]"),
  btnIncrement: document.querySelector("button[data-action=increment]"),
  value: document.querySelector("#value"),
};

let counterValue = 0;

// console.log(counterValue);

refs.btnDecrement.addEventListener("click", decrementValue);
refs.btnIncrement.addEventListener("click", incrementValue);

function decrementValue() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function incrementValue() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
