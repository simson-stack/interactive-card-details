document.querySelectorAll('.error').forEach(element => {
    element.style.display = 'none';
});
document.querySelector('.complete-block').style.display = 'none';
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const cvcInput = document.getElementById('cvc');
const nameContent = document.querySelector('.name-content');
const numberContent = document.querySelector('.card-content');
const monthContent = document.querySelector('.month-content');
const yearContent = document.querySelector('.year-content');
nameInput.addEventListener('input', () => {
    nameInput.value = nameInput.value.slice(0, 20);
    nameContent.textContent = nameInput.value.toUpperCase() || 'FELICIA LERE';
})
function addSpaces(cardNumber) {
    return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
}
numberInput.addEventListener('input', () => {
    numberInput.value = numberInput.value.slice(0, 16);
    numberContent.textContent = addSpaces(numberInput.value.slice(0, 19)) || '8800 7284 2713 8123';
})
monthInput.addEventListener('input', () => {
    monthInput.value = monthInput.value.slice(0, 2);
    if(Number(monthInput.value)>12) {
        alert('enter valid month');
        monthInput.value = monthInput.value.slice(1, 1);
        monthContent.textContent = '09';
    }
    if(Number(monthInput.value)<0) {
        monthInput.value = monthInput.value.slice(1, 1);
    }
    if(monthInput.value < 10 && monthInput.value > 0) {
        monthContent.textContent = 0 + monthInput.value;
    }
    else monthContent.textContent = '09';
});
yearInput.addEventListener('input', () => {
    yearInput.value = yearInput.value.slice(0, 2);
    if(Number(yearInput.value)<0) {
        yearInput.value = yearInput.value.slice(1, 1);
    }
    if(yearInput.value < 10 && yearInput.value > 0) {
        yearContent.textContent = 0 + yearInput.value;
    }
    if(yearInput.value >= 10 && yearInput.value <=99) {
        yearContent.textContent = yearInput.value;
    }
    if(String(yearInput.value).length === 0) {
        yearContent.textContent = '00';
    }
});
cvcInput.addEventListener('input', () => {
    cvcInput.value = cvcInput.value.slice(0, 3);
    if(cvcInput.value < 0) {
        cvcInput.value = cvcInput.value.slice(1, 1);
    }
});
const nameError = document.querySelector('.name-error');
const numberError = document.querySelector('.number-error');
const monthError = document.querySelector('.month-error');
const yearError = document.querySelector('.year-error');
const cvcError = document.querySelector('.cvc-error');
const submission = document.querySelector('.form');
const completed = document.querySelector('.complete-block');
const buttonText = document.querySelector('#confirm');

document.getElementById('confirm').addEventListener('click', () => {
    let completion = true;
    const regex = /\d/;
    if(nameInput.value.length < 5 || regex.test(nameInput.value)){
        nameError.style.display = 'block';
        completion = false;
    }
    else nameError.style.display = 'none';
    if(String(numberInput.value).length !== 16) {
        numberError.style.display = 'block';
        completion = false;
    }
    else numberError.style.display = 'none';
    if(String(monthInput.value).length === 0) {
        monthError.style.display = 'block';
        completion = false;
    }
    else monthError.style.display = 'none';
    if(String(yearInput.value).length === 0) {
        yearError.style.display = 'block';
        completion = false;
    }
    else yearError.style.display = 'none';
    if(String(cvcInput.value).length !== 3) {
        cvcError.style.display = 'block';
        completion = false;
    }
    else cvcError.style.display = 'none';

    if(completion){
        submission.style.display = 'none';
        completed.style.display = 'flex';
        buttonText.innerHTML = 'Continue';
        buttonText.addEventListener('click', () => {
            completed.style.display = 'none';
            submission.style.display = 'block';
            submission.reset();
            nameContent.textContent = "FELICIA LEIRE";
            numberContent.textContent = "8800 7284 2713 8123";
            monthContent.textContent = "09";
            yearContent.textContent = "00";
        })
    }
});
