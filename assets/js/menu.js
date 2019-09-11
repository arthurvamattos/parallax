let aberto = false;
const navbar = document.querySelector('.navbar');

const mostrarMenu = () => {
    if (aberto) {
        navbar.style.borderRadius = '30px';
        navbar.style.width = '60px';
        navbar.style.height = '60px';
        aberto = false;
    } else {
        navbar.style.borderRadius = '4px';
        navbar.style.width = '100px';
        navbar.style.height = '260px';
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