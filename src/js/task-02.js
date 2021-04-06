const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const elemOfUl = document.querySelector('#ingredients');

const makeEl = (options) => {
   return options.map(option => {
        const elemOfli = document.createElement('li');
       elemOfli.textContent = option;
        return elemOfli;

   });
};
const elemMake = makeEl(ingredients);



elemOfUl.append(...elemMake);
