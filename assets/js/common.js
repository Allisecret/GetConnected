function toggleMenu() {
    menuOpen = !menuOpen;

    if (menuOpen) {
        hamburgerMenu.classList.add('open');
        overlay.classList.add('active');
        menuToggle.classList.add('active');
    } else {
        hamburgerMenu.classList.remove('open');
        overlay.classList.remove('active');
        menuToggle.classList.remove('active');
    }
}