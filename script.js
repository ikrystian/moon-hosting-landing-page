const header = document.querySelector('.header');

const onScroll =() => {
  const scroll = document.documentElement.scrollTop;

  if(scroll > 0) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
}

window.addEventListener('scroll', onScroll);