let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: '.testimonial__item_right',
        prevEl: '.testimonial__item_left',
      },
      breakpoints: {
        572: {
          
        },
        100: {
          pagination: {
            el: '.swiper-pagination',
          },
        }
      }
})

let burger = document.querySelector(".header__item_burger")

let burgerMenu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
  burger.classList.toggle("header__item_burger_active")
  burgerMenu.classList.toggle("header__burger_list_active")
})


window.addEventListener("scroll", function(){
  if(scrollY>1) {
    document.querySelector(".header").classList.add("header__active")
  } else {
    document.querySelector(".header").classList.remove("header__active")
  }
})


let logo = document.querySelector(".header__item_logo")

logo.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


let goTo = document.querySelector(".header__item_list")

goTo.addEventListener("click", function(e){
  if (e.target.dataset.id) {
    let target = document.querySelector(e.target.hash)
    e.preventDefault()
    let pos = target.offsetTop-100
    window.scrollTo({
      top: pos,
      behavior: "smooth"
    })
  }
})


window.addEventListener("scroll", function(){
  let scrollDistance = window.scrollY
  console.log(scrollDistance)

let sect = document.querySelectorAll(".sect")
let nav = document.querySelectorAll(".header__item_list_type")

sect.forEach(function(el, i){
  if(el.offsetTop-119 <= scrollDistance) {
      nav.forEach(function(e){
          if (e.classList.contains("header__item_list_type_active")) {
              e.classList.remove("header__item_list_type_active")
          }
      })
      document.querySelectorAll('.header__item_list li')[i].classList.add("header__item_list_type_active")
  }
})

})