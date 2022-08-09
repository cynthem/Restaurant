function setActiveBtn() {
    const activeBtn = document.getElementById('active');
    if (activeBtn) activeBtn.removeAttribute('id');
    const homeBtn = document.querySelector('.home-link');
    homeBtn.setAttribute('id', 'active');
}