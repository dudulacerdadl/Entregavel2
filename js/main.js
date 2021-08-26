var nav = document.querySelector('.top-nav');
var mask = document.querySelector('.mask');
var btn = document.querySelector('.burger-button');

btn.addEventListener('click', function() {
    nav.toggleAttribute('opened');
    mask.toggleAttribute('opened');
    teste();
})

function teste() {
    window.addEventListener('click', function(e) {
        if (!nav.contains(e.target.parentNode) && e.target != btn) {
            nav.removeAttribute('opened');
            mask.removeAttribute('opened');
        }
    })
}