const hamburger1 = document.querySelector('.menu-list')
const hamburger2 = document.querySelector('.menu-X')
const mobile_menu = document.querySelector('.second-header')
const div = document.querySelector('.grid-container2')


hamburger1.addEventListener('click', ()=> {
    hamburger1.classList.add('invisible')
    hamburger2.classList.add('visible')
    mobile_menu.classList.toggle('switch')
    div.classList.add('close')
})

hamburger2.addEventListener('click', ()=> {
    hamburger1.classList.remove('invisible')
    hamburger2.classList.remove('visible')
    mobile_menu.classList.toggle('switch')
    div.classList.remove('close')
})