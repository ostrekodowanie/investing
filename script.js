//variables
const closeX = document.querySelector('.x')
const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar')

// functions

const hideNavbar = () => {
    nav.classList.remove('nav-active')
    closeX.classList.remove('x-active')
}

const navHeight = () => {
    let screenHeight = window.innerHeight
    nav.style.height = screenHeight + "px";
}

const navMove = () => {
    burger.addEventListener('click', () => {
        nav.classList.add('nav-active')
        closeX.classList.add('x-active')
        navHeight();
    })
    closeX.addEventListener('click', () => {
        hideNavbar();
    })
}

const outsideNav = () => {
    document.addEventListener('click', e => {
        if(e.target !== nav && e.target !== burger) hideNavbar()
    })
}


navMove();
outsideNav();
