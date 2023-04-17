var headerElement = document.querySelector('.header');
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerElement.classList.add('background-transparent');
    } else {
        headerElement.classList.remove('background-transparent');
    }
}
var slider = document.querySelector('.slider');
slider.setAttribute('style', 'background-image: url(\'./assets/img/slider2.jpg\');');
