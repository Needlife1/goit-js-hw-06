
const buttonDecr = document.querySelectorAll('button')[0];
const buttonIncr = document.querySelectorAll('button')[1];

let counterValue = 0;

buttonDecr.addEventListener('click', () => {
    counterValue = counterValue - 1;
    const valueEl = document.querySelector('span');
    valueEl.textContent = counterValue;
})

buttonIncr.addEventListener('click', () => {
    counterValue = counterValue += 1;
    const valueEl = document.querySelector('span');
    valueEl.textContent = counterValue
})
