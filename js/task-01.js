const categoriesList = document.querySelector(`#categories`);
const categoryItems = categoriesList.querySelectorAll(`li.item`);
const categoryCount = categoryItems.length;

console.log(`Number of categories: ${categoryCount}`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector(`h2`).textContent;
  const categoryCount = category.querySelectorAll(`li`).length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryCount}`);
});
