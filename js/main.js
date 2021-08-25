var body = document.querySelector('body')
var btn = document.querySelector('.burger-button');
var nav = document.querySelector('.top-nav');

btn.addEventListener('click', function () {
    var navDisplay = nav.getAttribute('style');

    if (navDisplay == 'display: none;') {
        nav.setAttribute('style', 'display: block;');
        console.log(navDisplay);
        console.log('Deu if')
    } else {
        nav.setAttribute('style', 'display: none;');
        console.log(navDisplay);
        console.log('Deu else')
    }
})