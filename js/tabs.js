document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.accordion__item-link').forEach(function(tabsBtn){
    tabsBtn.addEventListener("click", function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll(".guests__content").forEach(function(tabContent){
        tabContent.classList.remove("guests__active")
      })
      document.querySelector(`[data-guests-target="${path}"]`).classList.add("guests__active")
    })
  })
})