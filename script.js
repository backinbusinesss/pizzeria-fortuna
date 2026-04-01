/**
 * PIZZERIA FORTUNA - Script per UX Premium
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMAZIONE D'INGRESSO HERO
    // Fa apparire il titolo con un leggero movimento verso l'alto
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

    // 2. NAVBAR SCROLL EFFECT
    // La barra diventa più compatta e scura quando si scende
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.style.padding = '12px 5%';
            navbar.style.background = 'rgba(5, 5, 5, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '20px 5%';
            navbar.style.background = 'rgba(5, 5, 5, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. REVEAL SECTIONS ON SCROLL
    // Fa apparire le sezioni (Specialità, Storia, Contatti) quando entrano nel campo visivo
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const sectionsToAnimate = document.querySelectorAll('.spec-card, .story-grid, .contact-wrapper');
    
    sectionsToAnimate.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        revealObserver.observe(section);
    });

    // 4. SMOOTH SCROLL PER I LINK DELLA NAVIGAZIONE
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
