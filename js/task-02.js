const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = element;
  
  return ingredientItem;
});

console.log(elements);
ingredientsList.append(...elements);
