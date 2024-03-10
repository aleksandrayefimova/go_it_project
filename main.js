const burger = document.getElementById('burger')
const navMenu = document.getElementById('nav_menu')
const navClose = document.getElementById('nav_close')
const overlay = document.getElementById('overlay')

burger.addEventListener("click", function () {
  navMenu.classList.add('open')
  overlay.classList.add('open')
})

navClose.addEventListener("click", function () {
  navMenu.classList.remove('open')
  overlay.classList.remove('open')
})