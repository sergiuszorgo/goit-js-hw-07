const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

const counterValue = document.querySelector('#value')
counterValue.textContent = 0;

console.log(decrementBtn);
console.log(incrementBtn);
console.log(counterValue.textContent);

const increment = () => counterValue.textContent = Number(counterValue.textContent) + 1;
const decrement = () => counterValue.textContent = Number(counterValue.textContent) - 1;

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);