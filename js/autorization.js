window.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#autorization-btn-desc").addEventListener("click", function(){
    document.querySelector(".window").classList.toggle("lock")
  })

  document.querySelector("#autorization-btn-mobile").addEventListener("click", function(){
    document.querySelector(".window").classList.toggle("lock")
  })

  document.querySelector(".atorization__close-window").addEventListener("click", function(){
    document.querySelector(".window").classList.toggle("lock")
  })
})