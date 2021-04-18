const header = document.querySelector('.header');

const onScroll = () => {
    const scroll = document.documentElement.scrollTop;

    if (scroll > 0) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

window.addEventListener('scroll', onScroll);

document.querySelector('.toggle-mobile-nav-button').addEventListener('click', () => {
    toggleNav();
});

document.querySelector('.mobile-nav a').addEventListener('click', () => toggleNav())

function toggleNav() {
    document.querySelector('.mobile-nav').classList.toggle('active');
    document.querySelector('.toggle-mobile-nav-button').classList.toggle('active');
    document.querySelector('body').classList.toggle('blocked');
}

document.querySelector('.log-in-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.dialog__wrapper').style.display = 'grid';
})

document.querySelector('.form__button--cancel').addEventListener('click', () => {
    document.querySelector('.dialog__wrapper').style.display = 'none';
})
