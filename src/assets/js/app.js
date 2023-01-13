//masked inputs

Inputmask({"mask": "+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9"}).mask('.phone-mask');


$('[data-fancybox=""]').fancybox({
  // Options will go here
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


/* dusabled submit */


$(".js-hero-checkbox").on('change', function(){
  if($(this).is(':checked')){
    $(".js-hero-submit").removeAttr("disabled");
  }
  else {
    $(".js-hero-submit").prop('disabled',true);
  }
});
$(".js-demo-checkbox").on('change', function(){
  if($(this).is(':checked')){
    $(".js-demo-submit").removeAttr("disabled");
  }
  else {
    $(".js-demo-submit").prop('disabled',true);
  }
});
$(".js-about-checkbox").on('change', function(){
  if($(this).is(':checked')){
    $(".js-about-submit").removeAttr("disabled");
  }
  else {
    $(".js-about-submit").prop('disabled',true);
  }
});
