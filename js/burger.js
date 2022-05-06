window.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".header__burger-btn").addEventListener("click", function(){
    document.querySelector(".header__nav").classList.toggle("lock")
    document.querySelector(".header__bottom-list-wrapper").classList.toggle("lock")
  })

  document.querySelector(".burger__close").addEventListener("click", function(){
    document.querySelector(".header__nav").classList.toggle("lock")
    document.querySelector(".header__bottom-list-wrapper").classList.toggle("lock")
  })
})