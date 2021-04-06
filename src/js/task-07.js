const idText = document.querySelector('#text');
const idfontSizeControl = document.querySelector('#font-size-control');

const changeSize = (element) => {
     idText.style.fontSize = `${element.currentTarget.value}px`;
}

idfontSizeControl.addEventListener('input', changeSize)
