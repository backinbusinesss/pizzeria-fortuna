/**
 * PIZZERIA FORTUNA - Script per UX Premium e Animazioni
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMAZIONE D'INGRESSO HERO TEXT REVEAL
    // Fa apparire il testo del titolo con un dissolvenza fluida
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s cubic-bezier(0.23, 1, 0.32, 1)';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }

    // 2. SCROLL REVEAL (Attiva animazioni mentre scorri)
    // Aggiunge la classe .active alle sezioni con classe .reveal quando entrano in vista
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4; // Punto di attivazione (80% della finestra)

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            } else {
                //element.classList.remove('active'); // Rimuovi se vuoi che l'animazione si ripeta
            }
        });
    };

    // Controllo all'avvio e ad ogni scroll
    revealOnScroll(); 
    window.addEventListener('scroll', revealOnScroll);

});
