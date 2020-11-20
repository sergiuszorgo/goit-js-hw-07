const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');

// =====!!! Не ясен отказ в приёме этого варианта ??

// const createList = ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   listIngredients.append(item);
//   return listIngredients;
// }
// const itemList = ingredients.map(ingredient => createList(ingredient));

// =====!!!Переделал - теперь массив со всеми li добавляется за одну операцию innerHTML

// const createList = ingredients.reduce((string, item) => string + `<li>${item}</li>`, "");
// listIngredients.innerHTML = createList;

// =====!!!Поправочка - надо было использовать createElement

const ingredientItems = [];
ingredients.map(element => {
  let liItem = document.createElement('li');
  liItem.textContent = element;
  ingredientItems.push(liItem);
})
listIngredients.append(...ingredientItems);