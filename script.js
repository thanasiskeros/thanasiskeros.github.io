const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const fullMenu = document.getElementById('fullMenu');
const menuLinks = document.querySelectorAll('.menu-links a');

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

window.addEventListener("scroll", () => {
    let maxScroll = window.innerHeight * 0.8; 
    let progress = window.scrollY / maxScroll;
    
    if (progress > 1) progress = 1;
    if (progress < 0) progress = 0;
    
    document.documentElement.style.setProperty('--scroll', progress);
});

const carousels = document.querySelectorAll('.carousel-wrapper');

carousels.forEach(wrapper => {
    const prevBtn = wrapper.querySelector('.prev-btn');
    const nextBtn = wrapper.querySelector('.next-btn');
    const grid = wrapper.querySelector('.card-images-grid');

    if (prevBtn && nextBtn && grid) {
        nextBtn.addEventListener('click', () => {
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