document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const link = card.getAttribute('data-link');
        window.location.href = link;
    });
});
