const openMenu = document.getElementById('img-open-menu')
const closeMenu = document.getElementById('img-close-menu')
const navMobile = document.getElementById('nav-mobile')

openMenu.addEventListener('click', () => {
  navMobile.style.display = 'flex'
})

closeMenu.addEventListener('click', () => {
  navMobile.style.display = 'none'
})