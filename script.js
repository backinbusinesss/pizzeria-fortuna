/**
 * PIZZERIA FORTUNA - Script per UX Premium e Animazioni
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMAZIONE D'INGRESSO HERO
    // Fa apparire il contenuto dell'Hero con un dissolvenza e movimento
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1.2s cubic-bezier(0.23, 1, 0.32, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 400);
    }

    // 2. SCROLL REVEAL ANIMATION
    // Rileva quando le sezioni entrano nel campo visivo e aggiunge la classe 'active'
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4; // Punto di attivazione (80% della finestra)

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('active');
            } else {
                // Opzionale: rimuovi se vuoi che l'animazione si ripeta ogni volta
                // element.classList.remove('active'); 
            }
        });
    };

    // Eseguiamo il controllo all'avvio e ad ogni scroll
    revealOnScroll(); 
    window.addEventListener('scroll', revealOnScroll);

    // 3. NAVBAR SCROLL EFFECT
    // Rende la navbar più compatta quando si scende
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(5, 5, 5, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 4. SMOOTH SCROLL PER I LINK
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
