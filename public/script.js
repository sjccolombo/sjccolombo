const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const toTopBtn = document.querySelector('#to-top-btn');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    // Prevent Scrolling of the Main When Menu Opened
    document.body.classList.toggle('menu-open');
    // Toggle visibility of to-top button
    toTopBtn.style.visibility = (navMenu.classList.contains('show')) ? 'hidden' : 'visible';
});