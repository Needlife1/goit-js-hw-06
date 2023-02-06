// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');


const listItemsPotatoes = document.createElement('li');
listItemsPotatoes.classList.add('item');
listItemsPotatoes.textContent = 'Potatoes';


const listItemsMushrooms = document.createElement('li');
listItemsMushrooms.classList.add('item');
listItemsMushrooms.textContent = 'Mushrooms';


const listItemsGarlic = document.createElement('li');
listItemsGarlic.classList.add('item');
listItemsGarlic.textContent = 'Garlic';


const listItemsTomatos = document.createElement('li');
listItemsTomatos.classList.add('item');
listItemsTomatos.textContent = 'Tomatos';


const listItemsHerbs = document.createElement('li');
listItemsHerbs.classList.add('item');
listItemsHerbs.textContent = 'Herbs';


const listItemsCondiments = document.createElement('li');
listItemsCondiments.classList.add('item');
listItemsCondiments.textContent = 'Condiments';




ulEl.append(listItemsPotatoes, listItemsMushrooms, listItemsGarlic,  listItemsTomatos,
  listItemsHerbs, listItemsCondiments);

  