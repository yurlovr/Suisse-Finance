"use strict"

let navMenu = document.querySelector('.main-nav__wrapper');

let buttonOpenNavMenu = document.querySelector('.main-nav__toggle');


navMenu.classList.remove('main-nav__wrapper--nojs');

buttonOpenNavMenu.addEventListener('click', () => {

    if (navMenu.classList.contains('main-nav__wrapper--nojs')) {
        navMenu.classList.remove('main-nav__wrapper--nojs');
        navMenu.classList.add('main-nav__wrapper');
        buttonOpenNavMenu.classList.add('main-nav__toggle--open');
        buttonOpenNavMenu.classList.remove('main-nav__toggle--closed');
    } else  {
        navMenu.classList.add('main-nav__wrapper--nojs');
        navMenu.classList.remove('main-nav__wrapper');
        buttonOpenNavMenu.classList.add('main-nav__toggle--closed');
        buttonOpenNavMenu.classList.remove('main-nav__toggle--open');

    }
});

