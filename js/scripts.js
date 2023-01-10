// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.menu')
   const body = document.querySelector('body')
   burger.addEventListener('click', () => {
     if (!menu.classList.contains('active')) {
       menu.classList.add('active')
       burger.classList.add('active-burger')
       body.classList.add('locked')
     } else {
       menu.classList.remove('active')
       burger.classList.remove('active-burger')
       body.classList.remove('locked')
     }
   })
   // Вот тут мы ставим брейкпоинт навбара
   window.addEventListener('resize', () => {
     if (window.innerWidth > 991.98) {
       menu.classList.remove('active')
       burger.classList.remove('active-burger')
       body.classList.remove('locked')
     }
   })
 }
 burgerMenu()
 
 
 // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
 function fixedNav() {
   const nav = document.querySelector('nav')
 
   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
   const breakpoint = 1
   if (window.scrollY >= breakpoint) {
     nav.classList.add('fixed__nav')
   } else {
     nav.classList.remove('fixed__nav')
   }
 }
 window.addEventListener('scroll', fixedNav)


 /*========= CHANGE BACKGROUND HEADER ==========*/
// const scrollHeader = () => {
//   const header = document.getElementById('header')
//   // When the scroll is greater then 40 viewport height, add scroll-header class to header tag
//   if(scrollY >= 50) {
//       header.classList.add('bg-header')
//   } else {
//       header.classList.remove('bg-header')
//   }
// }
// window.addEventListener('scroll', scrollHeader)

/*========= SHOW SCROLL UP ==========*/
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if(scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)