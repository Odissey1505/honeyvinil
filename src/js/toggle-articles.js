document.addEventListener('DOMContentLoaded', function () {
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const article = this.closest('article');
            const fullText = article.querySelector('.article-full');

            // Перемикаємо показ/приховування повного тексту
            if (fullText.style.display === 'none' || !fullText.style.display) {
                fullText.style.display = 'block';
                this.textContent = 'Згорнути';
            } else {
                fullText.style.display = 'none';
                this.textContent = 'Читати далі';
            }
        });
    });
});
