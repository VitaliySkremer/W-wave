window.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".header__wrapper-search-btn").addEventListener("click", function(){
    document.querySelector(".header__form").classList.toggle("lock")
    document.querySelector(".header__logo").classList.toggle("lock-opacity")
    document.querySelector(".header__top-menu").classList.toggle("lock-opacity")
  })

  document.querySelector(".header__form-close").addEventListener("click", function(){
    document.querySelector(".header__form").classList.toggle("lock")
    document.querySelector(".header__logo").classList.toggle("lock-opacity")
    document.querySelector(".header__top-menu").classList.toggle("lock-opacity")
  })
})