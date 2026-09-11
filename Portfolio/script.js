// Επιλέγουμε τα στοιχεία από το HTML
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const fullMenu = document.getElementById('fullMenu');
const menuLinks = document.querySelectorAll('.menu-links a');

// Λειτουργίες Μενού
openBtn.addEventListener('click', () => {
    fullMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    fullMenu.classList.remove('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        fullMenu.classList.remove('active');
    });
});

// ΕΦΕ: Απαλή Σταδιακή Κίνηση στο Scroll
window.addEventListener("scroll", () => {
    // Θέλουμε η κίνηση να ολοκληρωθεί όταν σκρολάρουμε το 80% του ύψους της οθόνης μας
    let maxScroll = window.innerHeight * 0.8; 
    
    // Υπολογισμός ποσοστού (πχ 0.5 σημαίνει ότι έχουμε σκρολάρει μέχρι τη μέση)
    let progress = window.scrollY / maxScroll;
    
    // Το κρατάμε αυστηρά ανάμεσα στο 0 (Αρχή) και 1 (Τέλος - Καρφίτσωμα πάνω)
    if (progress > 1) progress = 1;
    if (progress < 0) progress = 0;
    
    // Περνάμε την τιμή αυτή στην CSS μεταβλητή "--scroll"
    document.documentElement.style.setProperty('--scroll', progress);
});
// ==========================================
// Λειτουργία για τα Βελάκια του Carousel
// ==========================================
const carousels = document.querySelectorAll('.carousel-wrapper');

carousels.forEach(wrapper => {
    const prevBtn = wrapper.querySelector('.prev-btn');
    const nextBtn = wrapper.querySelector('.next-btn');
    const grid = wrapper.querySelector('.card-images-grid');

    if (prevBtn && nextBtn && grid) {
        nextBtn.addEventListener('click', () => {
            // Υπολογίζει το πλάτος μιας εικόνας + το κενό (gap) για να κάνει τέλειο snap
            const imageWidth = grid.querySelector('img').clientWidth;
            const gap = parseInt(window.getComputedStyle(grid).gap) || 0;
            grid.scrollBy({ left: imageWidth + gap, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const imageWidth = grid.querySelector('img').clientWidth;
            const gap = parseInt(window.getComputedStyle(grid).gap) || 0;
            grid.scrollBy({ left: -(imageWidth + gap), behavior: 'smooth' });
        });
    }
});