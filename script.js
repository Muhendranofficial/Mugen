'use strict'

//////////////////////////////
///////// Reveal Section

const section = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry.target);
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});


section.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

//////////////////////////////////////////
///// Active and Remove Menu

const navLink = document.querySelectorAll('.nav__link');

const activeLink = function () {
    /*Active Link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active')
}

navLink.forEach(n => n.addEventListener('click', activeLink));