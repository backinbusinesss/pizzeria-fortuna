/**
 * PIZZERIA FORTUNA - Script per Animazioni ScrollReveal e UX Premium
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Configurazione base per ScrollReveal (Animazioni al caricamento/scorrimento)
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
        reset: false // Cambia a 'true' se vuoi che l'animazione si ripeta
    });

    // Applicazione animazioni alle sezioni principali
    
    // 1. Hero
    sr.reveal('.hero-tag', { delay: 300 });
    sr.reveal('.hero h1', { delay: 500 });
    sr.reveal('.hero-btns', { delay: 700 });

    // 2. Specialità
    sr.reveal('.spec-container', { delay: 300 });
    sr.reveal('.spec-img', { delay: 400, origin: 'left' });
    sr.reveal('.spec-text', { delay: 600, origin: 'right' });

    // 3. Storia
    sr.reveal('.section-title', { delay: 300 });
    sr.reveal('.story-info p', { delay: 400, interval: 100 });
    sr.reveal('.story-visual', { delay: 600, origin: 'right', scale: 0.9 });

    // 4. Contatti
    sr.reveal('.contact-grid', { delay: 300 });
    sr.reveal('.contact-details', { delay: 400, origin: 'left' });
    sr.reveal('.contact-map-wrapper', { delay: 600, origin: 'right' });

    // --- LOGICA AGGIUNTIVA ---

    // Navbar Scroll Effect (Opacità al cambio scroll)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 80) {
                navbar.style.background = 'rgba(5, 5, 5, 0.98)';
                navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            } else {
                navbar.style.background = 'rgba(5, 5, 5, 0.9)';
                navbar.style.boxShadow = 'none';
            }
        }
    });

    // Smooth Scroll per i link della navigazione
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
