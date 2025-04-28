// scroll-header.js

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        // Скролимо вниз → ховаємо шапку
        header.classList.add('hide');
        header.classList.remove('scrolled');
    } else {
        // Скролимо вгору → показуємо шапку
        header.classList.remove('hide');
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    lastScrollTop = scrollTop;
});