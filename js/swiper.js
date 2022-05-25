const swiper__playlist = new Swiper('.playlist__swiper', {
  pagination: {
    el: '.swiper-pagination-playlist',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});