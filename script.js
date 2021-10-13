'use strict'

const nav = document.querySelector('nav')
const toggle = document.querySelector('.menu-togle')
toggle.addEventListener('click', function (e) {
    nav.classList.toggle('active')
})

