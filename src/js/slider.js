document.addEventListener('DOMContentLoaded', function () {
    const coffeeSlider = document.querySelector('.coffee-slider');
    const dessertSlider = document.querySelector('.dessert-slider');

    const coffeeItems = coffeeSlider.querySelectorAll('.slider-item');
    const dessertItems = dessertSlider.querySelectorAll('.slider-item');

    let currentIndexCoffee = 0;
    let currentIndexDessert = 0;

    function showSlide(slider, items, index) {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    function moveToNextSlide(slider, items, index) {
        currentIndexCoffee = (currentIndexCoffee + 1) % items.length;
        currentIndexDessert = (currentIndexDessert + 1) % items.length;

        if (slider === 'coffee') {
            showSlide(coffeeSlider, coffeeItems, currentIndexCoffee);
        } else {
            showSlide(dessertSlider, dessertItems, currentIndexDessert);
        }
    }

    // Автоматичне перемикання слайдів кожні 3 секунди
    setInterval(() => moveToNextSlide('coffee', coffeeItems, currentIndexCoffee), 3000);
    setInterval(() => moveToNextSlide('dessert', dessertItems, currentIndexDessert), 3000);

    // Кнопки для перемикання вручну
    const prevButtons = document.querySelectorAll('.prev-button');
    const nextButtons = document.querySelectorAll('.next-button');

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentIndexCoffee = (currentIndexCoffee - 1 + coffeeItems.length) % coffeeItems.length;
            currentIndexDessert = (currentIndexDessert - 1 + dessertItems.length) % dessertItems.length;
            showSlide('coffee', coffeeItems, currentIndexCoffee);
            showSlide('dessert', dessertItems, currentIndexDessert);
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            moveToNextSlide('coffee', coffeeItems, currentIndexCoffee);
            moveToNextSlide('dessert', dessertItems, currentIndexDessert);
        });
    });

    // Показуємо перший слайд на початку
    showSlide('coffee', coffeeItems, currentIndexCoffee);
    showSlide('dessert', dessertItems, currentIndexDessert);
});