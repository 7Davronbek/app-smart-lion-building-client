const loader = document.querySelector('.loader')
const offset = window.pageYOffset
const header = document.querySelector('.header')

window.addEventListener('load', () => {
    loader.style.display = 'none'
})

const navbarScroll = () => {
    if (window.pageYOffset > 5) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

window.addEventListener('scroll', () => {
    navbarScroll()
})

const lang = document.querySelector("#lang")

lang.addEventListener("click", () => {
    lang.classList.toggle("active")
})

const burger = document.querySelector("#burger")
const burgerContent = document.querySelector("#burgerContent")

burger.addEventListener("click", () => {
    burgerContent.classList.toggle("active")
})



// const navbar = document.querySelector('.header')
// const offset = window.pageXOffset