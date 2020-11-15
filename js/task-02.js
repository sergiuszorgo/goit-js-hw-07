const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');

const createList = ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  listIngredients.append(item);
  return listIngredients;
}
const itemList = ingredients.map(ingredient => createList(ingredient));
console.log(createList(ingredients));