const categori = document.getElementById('categories');
const element = document.querySelectorAll('.item');
console.log(`В списке ${categori.children.length} категории`);
element.forEach(function (elem) {
    console.log(`Категория: ${elem.firstElementChild.textContent}`)
    console.log(`Количество элементов - ${elem.lastElementChild.children.length}`)
});