const rangeText = document.querySelector('#font-size-control');
const testText = document.querySelector('#text');

rangeText.addEventListener('input', function () {
    testText.style.fontSize = rangeText.value + 'px';
});