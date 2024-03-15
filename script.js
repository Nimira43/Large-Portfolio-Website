const navbar = document.getElementById('nav')
const navBtn = document.getElementById('nav-btn')
const closeBtn = document.getElementById('close-btn')
const sidebar = document.getElementById('sidebar')
const date = document.getElementById('date')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        navbar.classList.add('navbar-fixed')
    } else {
        navbar.classList.remove('navbar-fixed')
    }
})

navBtn.addEventListener('click', () => sidebar.classList.add('show-sidebar'))
closeBtn.addEventListener('click', () => sidebar.classList.remove('show-sidebar'))
// date.innerHTML = new Date().getFullYear()