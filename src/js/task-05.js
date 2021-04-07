const inputTextForm = document.querySelector('#name-input');
const outputTextForm = document.querySelector('#name-output');

const onFormSubmit = (event) => {
        // event.preventDefault();
    if (event.currentTarget.value === '') {
        return outputTextForm.textContent = 'незнакомец';
    }
    return outputTextForm.textContent = event.currentTarget.value 
};
inputTextForm.addEventListener('input', onFormSubmit);


// const inputTextForm = document.querySelector('#name-input');
// const outputTextForm = document.querySelector('#name-output');

// const onFormSubmit = () => {
//     const textIns = inputTextForm.value.trim().length;
//         // event.preventDefault();
//     if (textIns === 0) {
//         return outputTextForm.textContent = 'незнакомец';
//     }
//     return outputTextForm.textContent = inputTextForm.value;
// };
// inputTextForm.addEventListener('input', onFormSubmit);