const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener('blur', () => {
    inputValid.value.length === Number(inputValid.getAttribute("data-length")) ?
        inputValid.classList.add("valid") : inputValid.classList.add("invalid")
});
inputValid.addEventListener('focus', () => {
    inputValid.classList.remove("valid")
    inputValid.classList.remove("invalid")
});