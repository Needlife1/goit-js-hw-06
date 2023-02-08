
const arrayOfCategories = categories.querySelectorAll(".item");
console.log(`Number of categories: ${arrayOfCategories.length}`);

const CategoriesArray = [...arrayOfCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
  Elements: ${categories.children[1].children.length}`
  ).join();
  


