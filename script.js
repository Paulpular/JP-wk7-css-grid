const hamburger = document.querySelector('.menu')
const nav = document.querySelector('.second-header')
const div = document.querySelector('.grid-container2')


hamburger.addEventListener('click', ()=> {
    nav.classList.toggle('visible')
    div.classList.toggle('close')
})