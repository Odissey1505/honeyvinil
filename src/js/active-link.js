// active-link.js

document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    let currentPage = path.split('/').pop(); // беремо останній елемент шляху

    // Якщо користувач на головній без вказання index.html
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});