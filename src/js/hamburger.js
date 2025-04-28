// hamburger.js

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');
    const navItems = document.querySelectorAll('.nav-links a');
    const siteContent = document.querySelector('.site-content');

    // Клік по гамбургеру
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        overlay.classList.toggle('active');

        if (overlay.classList.contains('active')) {
            setTimeout(() => {
                navLinks.classList.add('active');
                siteContent.classList.add('blurred'); // додаємо зум
            }, 200);
        } else {
            navLinks.classList.remove('active');
            siteContent.classList.remove('blurred'); // знімаємо зум
        }
    });

    // Клік по затемненню
    overlay.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        siteContent.classList.remove('blurred'); // знімаємо зум
    });

    // Клік по пункту меню
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            siteContent.classList.remove('blurred'); // знімаємо зум
        });
    });
});
