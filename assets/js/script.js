document.addEventListener('DOMContentLoaded', function () {
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
    });

    const services = document.querySelectorAll('.service-list__link');
    const activeClass = 'service-list__link--active';
    const activeSection = 'active-section';
    let activeSectionEl = document.querySelector(`.${activeSection}`);
    setElHeight(activeSectionEl)

    services.forEach(el => {
        el.addEventListener('click', (e) => {
            activeSectionEl = document.querySelector(`.${activeSection}`);
            e.preventDefault();
            setElHeight(activeSectionEl);
            document.querySelector(`.${activeClass}`).classList.remove(activeClass);
            activeSectionEl.classList.remove(activeSection);
            const data = el.dataset.item
            document.getElementById(data).classList.add(activeSection);
            el.classList.add(activeClass);
        });
    });

    function setElHeight(el) {
        const currentElHeight = el.clientHeight;
        document.querySelector('.service-item').style.height = `${currentElHeight}px`;
    }

})
