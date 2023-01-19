//masked inputs

Inputmask({"mask": "+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9"}).mask('.phone-mask');


$('[data-fancybox=""]').fancybox({
  // Options will go here
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

/* mobile menu */
// mobile menu
$(() => {
  const btnMenu = document.querySelector('.burger');
  const menu = document.querySelector('.hide-menu');
  const body = document.querySelector('.overflow');
  // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  const toggleMenu = function () {
    menu.classList.toggle('is-open');
    // menu.style.height = heroHeight + headerHeight + 'px'
    btnMenu.classList.toggle('is-active');
    body.classList.toggle('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  const closeBtn = document.querySelector('.close');
  const closeMenu = function () {
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
    btnMenu.classList.remove('is-active');
  };

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
});

/* direction slider */
var swiperDirection = new Swiper(".direction-slider", {
  loop: true,
  navigation: {
    nextEl: ".direction__nav-next",
    prevEl: ".direction__nav-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
/* projects slider */
var swiperProject = new Swiper(".projects-slider", {
  loop: true,

  navigation: {
    nextEl: ".projects__nav-next",
    prevEl: ".projects__nav-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
    },
    768: {
      autoHeight: false,
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
});
/* service slider */
var swiperService = new Swiper(".service-slider", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".service__nav-next",
    prevEl: ".service__nav-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    601: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
/* honor slider */
var swiperhonors = new Swiper(".honors-slider", {
  slidesPerView: 2.8,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".honors__nav-next",
    prevEl: ".honors__nav-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2.8,
      spaceBetween: 50,
    },
  },
});


// tabs

document.addEventListener('DOMContentLoaded', function() {
  const tabsBtn = document.querySelectorAll('.tabs__btn')
  tabsBtn.forEach(function(el) {
    el.addEventListener('click', function(event) {

      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('tabs__btn_active')
      })

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tabs__content').forEach(function(tabContent) {
        tabContent.classList.remove('tabs__content_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content_active')
      el.classList.add('tabs__btn_active')
    })
  })
});

// anchors
$(() => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})

$(document).ready(function() {
  $('#fullpage').fullpage({
    scrollingSpeed: 1000,
    verticalCentered: true,
    afterLoad: function (anchorLink, index) {
      //for the 2nd vertical section
      if (index == 1) {
        $('.header').removeClass('header_fixed');
      } else {
        $('.header').addClass('header_fixed');
      }
    }
  });
});


