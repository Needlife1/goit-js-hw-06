
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsConteinerEl = document.querySelector('#ingredients');
const addIngrediensEl = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add(".item");
  itemEl.textContent = ingredient;
  return itemEl;
});
ingredientsConteinerEl.append(...addIngrediensEl);
