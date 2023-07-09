const categories = document.querySelector("#categories");
const children = [...categories.children];

children.forEach((element, index, arr) => {
  const total = arr.length;
  console.log(`Number of categories: ${total}`);
});

children.forEach((el) => {
  console.log(`Category:${el.children[0].textContent}`);
  console.log(`Elements:${el.lastElementChild.children.length}`);
});
