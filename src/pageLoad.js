function createNavBtns(cls, text) {
    const button = document.createElement('button');
    button.classList.add(cls);
    button.textContent = text;
    return button;
}

function createNavBar(cls) {
    const navBar = document.createElement('div');
    navBar.classList.add('navbar');
    const homeBtn = createNavBtns('home-link', 'Home');
    const menuBtn = createNavBtns('menu-link', 'Menu');
    const contactBtn = createNavBtns('contact-link', 'Contact');
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
}