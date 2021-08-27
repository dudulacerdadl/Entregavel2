var nav = document.querySelector('.top-nav');
var mask = document.querySelector('.mask');
var btnForm = document.querySelector('.btn');
var btnBurger = document.querySelector('.burger-button');
var email = document.querySelector('#email');

btnForm.addEventListener('click', function() {
    const e = /[a-z0-9.]*@[a-z0-9]*\.[a-z\.]*/
    const isValid = e.test(email.value);

    if (!isValid) {
        email.setCustomValidity('');

        if (email.validity.valueMissing) {
            email.setCustomValidity('Digite seu e-mail aqui');
        } else {
            email.setCustomValidity('Email inválido. Digite um e-mail como o exemplo: 12345@exemplo.com');
        }
    } else {
        email.setCustomValidity('');
    }
});

btnBurger.addEventListener('click', function() {
    nav.toggleAttribute('opened');
    mask.toggleAttribute('opened');
    clickOut();
});

function clickOut() {
    window.addEventListener('click', function(e) {
        if (!nav.contains(e.target.parentNode) && e.target != btn) {
            nav.removeAttribute('opened');
            mask.removeAttribute('opened');
        }
    });
}