
const slider = $('.slider').bxSlider({
      minSlides: 3,
      maxSlides: 3,
      slideWidth: 431,
      slideMargin:0,
      pager:false,
      controls:false
});



$(".arrow-left").click(e => {
  e.preventDefault();

  slider.goToPrevSlide();
})


$(".arrow-right").click(e => {
  e.preventDefault();
  slider.goToNextSlide();
})
