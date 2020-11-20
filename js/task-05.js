const inputLine = document.querySelector('#name-input');
const nameLine = document.querySelector('#name-output');

// inputLine.addEventListener('input', event => {
//     nameLine.textContent = event.target.value;
// });

// Исправил: теперь при пустом инпуте - в спане отображается слово "незнакомец"

inputLine.addEventListener('input', event => {
    if (inputLine.value.length == 0) {
        nameLine.textContent = 'незнакомец';
    }
    else {
        nameLine.textContent = event.target.value;
    }
});