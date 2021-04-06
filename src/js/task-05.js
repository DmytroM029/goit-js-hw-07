const inputTextForm = document.querySelector('#name-input');
const outputTextForm = document.querySelector('#name-output');

const onFormSubmit = (event) => {
        // event.preventDefault();
    if (event.currentTarget.value === '') {
        return outputTextForm.textContent = 'незнакомец';
    }
    return outputTextForm.textContent = event.currentTarget.value 
};
inputTextForm.addEventListener('change', onFormSubmit);