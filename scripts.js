const d = document,
    input = d.querySelector('.form__input'),
    submit = d.querySelector('.form__submit'),
    error = d.querySelector('.form__img--error'),
    alertMsg = d.querySelector('.alert'),
    form = d.querySelector('.form');

function checkEmail (e) {
    e.preventDefault();
    console.log('hello')
    pattern = new RegExp (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!(pattern.test(input.value))) {
        displayError();
    } else if (pattern.test(input.value)) {
        removeError();
    }
}

function displayError() {
    alertMsg.classList.add('active');
    input.classList.add('active');
    error.classList.add('active');
}

function removeError() {
    alertMsg.classList.remove('active');
    input.classList.remove('active');
    error.classList.remove('active');
}

submit.addEventListener('click', checkEmail);
submit.addEventListener('touchstart', checkEmail);