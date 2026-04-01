// Inizializzazione ScrollReveal per animazioni fluide
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

// Applicazione animazioni alle sezioni
sr.reveal('.hero-content', { delay: 300, origin: 'top' });
sr.reveal('.story-text', { delay: 400 });
sr.reveal('.story-image', { delay: 600, origin: 'right' });
sr.reveal('.menu-item', { interval: 100 });
sr.reveal('.spec-card', { delay: 300, scale: 0.9 });
sr.reveal('.location-box', { delay: 200 });

// Logica Filtro Menù (Micro-interazione)
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.tab-btn');

    // Cambia stato bottone
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category.substring(0,3))) {
            btn.classList.add('active');
        }
    });

    // Filtra elementi
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'flex';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.display = 'none';
            }
        }, 300);
    });
}

// Effetto Navbar al cambio scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 5%';
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.padding = '1.5rem 5%';
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});
