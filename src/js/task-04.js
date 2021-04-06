// const counterValue = document.querySelector('#value');
// const addListenerBtn = document.querySelector('decrement');
// const removeListenerBtn = document.querySelector('increment');

let counterValue = 0;

const addPointBtn = document.querySelector(`[data-action = "decrement"]`);
const removePointBtn = document.querySelector(`[data-action = "increment"]`);

const valueEl = document.querySelector(`#value`)

const removeValue = () =>  {
    counterValue -= 1
    valueEl.textContent = counterValue
};
addPointBtn.addEventListener('click', removeValue);

const addValue = () =>  {
    counterValue += 1;
    valueEl.textContent = counterValue
};
removePointBtn.addEventListener('click', addValue);