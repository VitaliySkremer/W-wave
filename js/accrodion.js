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
  if (window.innerWidth <= 576) {
    $('html, body').animate({
      scrollTop: $('.guests__content-link').offset().top
  }, 200);
  }
});