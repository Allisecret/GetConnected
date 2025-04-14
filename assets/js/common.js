let menuOpen = false;
const hamburgerMenu = document.getElementById('hamburger-menu');
const overlay = document.getElementById('overlay');
overlay.addEventListener("click",toggleMenu);
function toggleMenu() {
    menuOpen = !menuOpen;

    if (menuOpen) {
        hamburgerMenu.classList.add('open');
        overlay.classList.add('active');
        menuToggle.classList.add('active');
    } else {
        hamburgerMenu.classList.remove('open');
        overlay.classList.remove('active');
    }
}