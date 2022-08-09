function createDescription() {
    const description = document.createElement('div');
    description.classList.add('description');
    const title = document.createElement('h1');
    title.textContent = 'Zia Teresa';
    const descriptText = document.createElement('div');
    descriptText.classList.add('description-text');
    const paraTop = document.createElement('p');
    paraTop.textContent = 'A menu for everyone';
    const paraBottom = document.createElement('p');
    paraBottom.textContent = 'Offering a la carte, set menus, and bespoke pizzas';
    descriptText.appendChild(paraTop);
    descriptText.appendChild(paraBottom);
    const welcome = document.createElement('h2');
    welcome.textContent = 'Benvenuto alla famiglia!';
    description.appendChild(title);
    description.appendChild(descriptText);
    description.appendChild(welcome);
    return description;
}

function createInformation() {
    
}

function loadHome() {}
