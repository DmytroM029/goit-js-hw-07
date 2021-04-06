
const currentLengthCategories = document.querySelectorAll('.item');

console.log(`В списке ${currentLengthCategories.length} категории.`);

currentLengthCategories.forEach((categorial) => {
    console.log(`Категория: ${categorial.firstElementChild.textContent}
Количество элементов: ${categorial.lastElementChild.children.length}`);
    // console.log(animal.querySelectorAll('li.item'));
}); 

