function setActiveBtn() {
    const activeBtn = document.getElementById('active');
    if (activeBtn) activeBtn.removeAttribute('id');
    const contactBtn = document.querySelector('.contact-link');
    contactBtn.setAttribute('id', 'active');
}

function createContactPage() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-main');
    contactPage.innerHTML = `
        <div class="contact-title">
            <h2 class="contact-header">Contact Us</h1>
            <img class="spaghetti" src="../resources/spaghetti.jpeg">
        </div>
        <div class="contact-map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.4455970045587!2d-73.98424128460488!3d40.75999197932671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ff4d04f7c1%3A0x549c9540889c943d!2s115%20W%2049th%20St%2C%20New%20York%2C%20NY%2010019!5e1!3m2!1sen!2sus!4v1660074280277!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div class="contact-info">
            <div class="contact-logo">
                <h1 class="zia-logo">Zia</h1>
                <h1 class="teresa-logo">Teresa</h1>
                <img class="original" src="../resources/theOG.jpg">
            </div>
            <div class="zia-info">
                <div class="contact-address">
                    <i class="fa-solid fa-location-dot fa-lg"></i>
                    <p>115 West 49th St, New York, NY 10019</p>
                </div>
                <div class="contact-hours">
                    <i class="fa-solid fa-clock fa-lg"></i>
                    <div class="hours-text">
                        <p>Monday to Wednesday 12:30pm to 9pm</p>
                        <p>Thursday to Saturday 12:30pm to 11pm</p>
                        <p>Sunday 12pm to 8:30pm</p>
                    </div>
                </div>
                <div class="contact-phone">
                    <i class="fa-solid fa-phone fa-lg"></i>
                    <p>(212) 759-5942</p>
                </div>
            </div>
        </div>
        <div class="contact-form">
            <div class="message-form">
                <div class="message-title">
                    <i class="fa-solid fa-envelope fa-sm"></i>
                    <p>Message Us</p>
                </div>
                <form method="post" action="mailto:zia-teresa@mail.com?Subject=Hello">
                    <div class="input">
                        <input type="text" required>
                        <span class="form-span">Name</span>
                    </div>
                    <div class="input">
                        <input type="email" required>
                        <span class="form-span">Email</span>
                    </div>
                    <div class="input">
                        <textarea required></textarea>
                        <span class="form-span">Type a message...</span>
                    </div>
                    <input type="submit" value="Send">
                </form>
            </div>
            <img class="original-text" src="../resources/ziaTeresa.jpeg">
        </div>
    `;
    return contactPage;
}

function loadContact() {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const contactPage = createContactPage();
    setActiveBtn();
    main.appendChild(contactPage);
}

export default loadContact;