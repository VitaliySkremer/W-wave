window.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".header__bottom-what-ether").addEventListener("click", function(){
    document.querySelector(".header__bottom-what-seck").classList.toggle("header__bottom-what-active")
    document.querySelector(".header__bottom-what-ether").classList.toggle("header__bottom-what-active-bg")
    document.querySelector(".header__bottom-players").classList.toggle("header__bottom-players-flex")

  })
})