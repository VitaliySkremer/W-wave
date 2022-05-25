window.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#podcast__more-btn").addEventListener("click", function(){
    document.querySelectorAll(".podcast__item-hide").forEach(function(path){
      path.classList.toggle("hide");
    })
    document.querySelector(".podcast__more-btn").classList.toggle("podcast-nomore");
    let flag = document.querySelector("#podcast__more-btn").classList.contains("podcast-nomore");
    let btn = document.querySelector("#podcast__more-btn");
    if(!flag) {
      btn.textContent = 'Скрыть';
    }
    else {
      btn.textContent = 'Ещё подкасты';
    }
  })
 })


 window.addEventListener("resize", function () {
  if (window.innerWidth <= 576) {
    document.querySelectorAll(".hide-mobile").forEach(function(path){
      path.classList.add("hide");
    })
  } else {
    document.querySelectorAll(".hide-mobile").forEach(function(path){
      path.classList.remove("hide");
    })
  }
});