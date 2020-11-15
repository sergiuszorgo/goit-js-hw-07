const inputLine = document.querySelector('#name-input');
const nameLine = document.querySelector('#name-output');

inputLine.addEventListener('input', e => {
    nameLine.textContent = e.target.value;
});