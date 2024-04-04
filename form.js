let inputFields = document.getElementsByClassName('form__input');
let textareaFields = document.querySelectorAll('textarea.form__input');
let requiredFields = document.querySelectorAll('.form__input[required]');

let addFocus = (element) => {
    element.addEventListener('blur', () => {
        if (element.value === '') {
            element.classList.remove('form__input--not-empty');
        } else {
            element.classList.add('form__input--not-empty');
        }
    });
};

let autoSizing = (element) => {
    element.addEventListener('input', () => {
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 2 + 'px';
    });
};

let autoAsterisk = (element) => {
    let elementId = element.id;
    document.querySelector('label[for = "' + elementId + '"]').innerHTML += ' *';

    element.addEventListener('blur', () => {
        if (element.value !== '') {
            let text = document.querySelector('label[for = "' + elementId + '"]').innerHTML;
            text = text.slice(0, -2);
            document.querySelector('label[for = "' + elementId + '"]').innerHTML = text;
        }
    });
};

Array.from(textareaFields).forEach(autoSizing);
Array.from(inputFields).forEach(addFocus);
Array.from(requiredFields).forEach(autoAsterisk);