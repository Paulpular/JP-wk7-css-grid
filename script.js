const hamburger = document.querySelector('.list-image-frame')
const nav = document.querySelector('.second-header')


hamburger.addEventListener('click', ()=> {
    nav.classList.toggle('visible')
})