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
    const infoSection = document.createElement('div');
    infoSection.classList.add('bottom-section');
    const address = document.createElement('div');
    address.classList.add('address');
    const addIcon = document.createElement('i');
    addIcon.classList.add('fa-solid', 'fa-location-dot', 'fa-lg');
    const addText = document.createElement('p');
    addText.textContent = 'Upstairs 115 West 49th St, New York City';
    address.appendChild(addIcon);
    address.appendChild(addText);
    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursIcon = document.createElement('i');
    hoursIcon.classList.add('fa-solid', 'fa-clock', 'fa-lg');
    const hoursText = document.createElement('div');
    hoursText.classList.add('hours-text');
    const hoursPOne = document.createElement('p');
    hoursPOne.textContent = 'Monday to Wednesday 12:30pm to 9pm';
    const hoursPTwo = document.createElement('p');
    hoursPTwo.textContent = 'Thursday to Saturday 12:30pm to 11pm';
    const hoursPThree = document.createElement('p');
    hoursPThree.textContent = 'Sunday 12pm to 8:30pm';
    hoursText.appendChild(hoursPOne);
    hoursText.appendChild(hoursPTwo);
    hoursText.appendChild(hoursPThree);
    hours.appendChild(hoursIcon);
    hours.appendChild(hoursText);
    infoSection.appendChild(address);
    infoSection.appendChild(hours);
    return infoSection;
}

function setActiveBtn() {
    const activeBtn = document.getElementById('active');
    if (activeBtn) activeBtn.removeAttribute('id');
    const homeBtn = document.querySelector('.home-link');
    homeBtn.setAttribute('id', 'active');
}

function loadHome() {
    const content = document.getElementById('content');
    const description = createDescription();
    const information = createInformation();
    setActiveBtn();
    content.appendChild(description);
    content.appendChild(information);
}

export default loadHome;
