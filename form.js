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
    let labelElement = document.querySelector('label[for = "' + element.id + '"]');

    labelElement.innerHTML += ' *';

    element.addEventListener('keyup', () => {
        let isAsterisk = labelElement.innerHTML.indexOf('*') === labelElement.innerHTML.length - 1;
        if (element.value === '' && !isAsterisk) {
            addAsterisk(labelElement);
            console.log('Add asterisk');
        }
        if (element.value !== '' && isAsterisk) {
            removeAsterisk(labelElement);
            console.log('Remove asterisk');
        }
    });

    element.addEventListener('blur', () => {
        let isAsterisk = labelElement.innerHTML.indexOf('*') === labelElement.innerHTML.length - 1;
        if (element.value === '' && !isAsterisk) {
            addAsterisk(labelElement)
        }
        if (element.value !== '' && isAsterisk) {
            removeAsterisk(labelElement)
        }
    });
};

let addAsterisk = (element) => {
    element.innerHTML += ' *';
};

let removeAsterisk = (element) => {
    let asteriskIndex = element.innerHTML.indexOf('*');
    element.innerHTML = element.innerHTML.substring(0, asteriskIndex - 1);
};

Array.from(textareaFields).forEach(autoSizing);
Array.from(inputFields).forEach(addFocus);
Array.from(requiredFields).forEach(autoAsterisk);