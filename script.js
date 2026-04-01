/**
 * PIZZERIA FORTUNA - Script per UX Premium e Animazioni High-End
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Configurazione base per ScrollReveal (Animazioni fluide)
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1200, // Più lento per un effetto Michelin
        delay: 200,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)', // Easing ultra-fluido (Apple style)
        reset: false // Cambia a 'true' se vuoi che l'animazione si ripeta
    });

    // --- ANIMAZIONI HERO (Caricamento immediato) ---
    sr.reveal('.hero-tag', { delay: 300, origin: 'top' });
    sr.reveal('.hero h1', { delay: 500, distance: '60px' });
    sr.reveal('.hero-btns', { delay: 800, scale: 0.9, distance: '0px' });

    // --- ANIMAZIONI SEZIONI SCROLL (Michelin Quality) ---
    
    // 1. Specialità
    sr.reveal('.spec-container', { delay: 200 });
    sr.reveal('.spec-img', { delay: 300, origin: 'left', distance: '100px' });
    sr.reveal('.spec-text h2', { delay: 500, distance: '20px' });
    sr.reveal('.spec-text p', { delay: 600, distance: '20px' });
    sr.reveal('.price-tag', { delay: 700, origin: 'top', distance: '10px' });

    // 2. Storia
    sr.reveal('.story-section .section-title', { delay: 200, origin: 'left' });
    sr.reveal('.story-info p', { delay: 400, interval: 100 });
    sr.reveal('.story-visual', { delay: 600, scale: 0.8, distance: '0px' });

    // 3. Contatti
    sr.reveal('.contact-section .section-title', { delay: 200 });
    sr.reveal('.info-item', { delay: 300, interval: 100, origin: 'left' });
    sr.reveal('.social-links a', { delay: 600, interval: 100, scale: 0.5, distance: '0px' });
    sr.reveal('.btn-whatsapp', { delay: 900, origin: 'right', distance: '50px' });
    sr.reveal('.contact-map-wrapper', { delay: 400, scale: 0.9, distance: '0px' });

    // --- EFFETTI AGGIUNTIVI ---

    // Navbar Scroll Effect (Opacità)
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

});
