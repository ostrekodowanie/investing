//variables
const closeX = document.querySelector('.x')
const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar')

// functions

const hideNavbar = () => {
    nav.classList.remove('nav-active')
    closeX.classList.remove('x-active')
}

const navMove = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        closeX.classList.toggle('x-active')
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
