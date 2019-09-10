let aberto = false;
const navbar = document.querySelector('.navbar');

const mostrarMenu = () => {
    if (aberto) {
        navbar.style.overflow = 'hidden';
        navbar.style.borderRadius = '30px';
        navbar.style.width = '60px';
        navbar.style.height = '60px';
        aberto = false;
    } else {
        navbar.style.overflow = 'auto';
        navbar.style.borderRadius = '0';
        navbar.style.width = '100px';
        navbar.style.height = '40vh';
        aberto = true;
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (navbar.offsetWidth <= 100) {
            navbar.style = '';
        }
    }
});