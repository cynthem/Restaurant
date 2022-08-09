import loadPage from './pageLoad';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function navEvents() {
    const homeLink = document.querySelector('.home-link');
    const menuLink = document.querySelector('.menu-link');
    const contactLink = document.querySelector('.contact-link');

    homeLink.addEventListener('click', loadHome);
    menuLink.addEventListener('click', loadMenu);
    contactLink.addEventListener('click', loadContact);
}

function init() {
    loadPage();
    loadHome();
    navEvents();
}