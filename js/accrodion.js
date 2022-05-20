$(function() {
  $(".accordion").accordion({
          active: false,
          autoHeight: true,
          navigation: true,
          collapsible: true,
          heightStyle: 'content'
      });
});



$('.accordion__item-link').click(() => {
  if (window.innerWidth <= 760) {
    $('html, body').animate({
      scrollTop: $('.guests__active').offset().top
  }, 400);
  }
});