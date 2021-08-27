var btnForm = document.querySelector('.btn');
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