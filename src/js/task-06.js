  
const idValidation = document.querySelector('#validation-input');

const inputValidation = (element) => {
    if (Number(idValidation.dataset.length) === element.currentTarget.value.length) {
        idValidation.classList.remove('invalid');
        idValidation.classList.add('valid');
    }
    else {
        idValidation.classList.remove('valid');
        idValidation.classList.add('invalid');
        
    }
};

idValidation.addEventListener('blur',  inputValidation )