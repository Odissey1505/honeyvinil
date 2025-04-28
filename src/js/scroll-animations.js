// scroll-animations.js

document.addEventListener('DOMContentLoaded', function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.3, // коли видно 30% елемента
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) return;

            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150); // затримка 150 мс на кожен елемент

            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});