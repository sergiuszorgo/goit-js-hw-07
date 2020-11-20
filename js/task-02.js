const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');

// const createList = ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   listIngredients.append(item);
//   return listIngredients;
// }
// const itemList = ingredients.map(ingredient => createList(ingredient));

// Переделал - теперь массив со всеми li добавляется за одну операцию innerHTML

const createList = ingredients.reduce((string, item) => string + `<li>${item}</li>`, "");

listIngredients.innerHTML = createList;