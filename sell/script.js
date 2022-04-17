//mobile navbar
const closeX = document.querySelector('.x')
const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar')

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

//appending or removing html paragraph for each of the stock divs

const stock = document.querySelectorAll('.stock')
const stockParagraph = document.querySelectorAll('.stock p')
const stockTextDiv = document.querySelectorAll('.stock-text')


const appendToStockText = () => {
    let screenWidth = window.innerWidth
    if(screenWidth >= 1340) {
        for(let i = 0; i < stock.length; i++) {
            stockTextDiv[i].append(stockParagraph[i])
        }
    }
}

const removeFromStockText = () => {
    let screenWidth = window.innerWidth
    let putBefore = document.querySelectorAll('.stock a')
    if(screenWidth < 1340) {
        for(let i = 0; i < stock.length; i++) {
            stock[i].insertBefore(stockParagraph[i], putBefore[i])
        }
    }
}


//calling functions based on the screen width

window.addEventListener('resize', () => {
    let screenWidth = window.innerWidth
    if(screenWidth < 750) navMove()
        else nav.style.height = "6rem"
    appendToStockText()
    removeFromStockText()
})

//since css is mobile-first, calling functions which require default setup

navMove()
appendToStockText()

