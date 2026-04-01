document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
    });

    sr.reveal('.hero-content');
    sr.reveal('.spec-card', { delay: 400 });
    sr.reveal('.contact-grid', { delay: 400 });
});
