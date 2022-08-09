function createNavBtns(cls, text) {
    const button = document.createElement('button');
    button.classList.add(cls);
    button.textContent = text;
    return button;
}

function createNavBar() {
    const navBar = document.createElement('div');
    navBar.classList.add('navbar');
    const homeBtn = createNavBtns('home-link', 'Home');
    const menuBtn = createNavBtns('menu-link', 'Menu');
    const contactBtn = createNavBtns('contact-link', 'Contact');
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    return navBar;
}

function createMainSection() {
    const mainSection = document.createElement('div');
    mainSection.classList.add('main');
    return mainSection;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Tia Teresa © 2022 | All Rights Reserved';
    const link = document.createElement('a');
}