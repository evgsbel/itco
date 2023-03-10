//masked inputs

Inputmask({"mask": "+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9"}).mask('.phone-mask');


$(()=>{
  $.fancybox.defaults.btnTpl.smallBtn = '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
    '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect y="3.53657" width="5" height="30" rx="2.5" transform="rotate(-45 0 3.53657)" fill="white"/>' +
    '<rect x="3.53662" y="24.7487" width="5" height="30" rx="2.5" transform="rotate(-135 3.53662 24.7487)" fill="white"/>' +
    '</svg>' +
    '</button>';
  $('[data-fancybox]').fancybox({

    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionEffect: "rotate",
    transitionDuration: 400,
  });
})

// fixed header
$(()=>{
let timer = null;
window.addEventListener('scroll', function () {

  if (timer !== null) {
    clearTimeout(timer);
    document.querySelector('header').classList.add('out', 'header_fixed');

    function stickySidebar() {
      var scrollDistance = $(document).scrollTop(),
        headerHeight = $('.header').outerHeight(true),
        // sidebarHeight = $('aside').outerHeight(true),
        footerOffsetTop = $('.js-stop-header').offset().top,
        $header = $('header');

      if (scrollDistance >= headerHeight) {
        $header.addClass('header_fixed');

      } else {
        $header.removeClass('header_fixed');
      }

      if (scrollDistance + headerHeight >= footerOffsetTop) {
        $header.removeClass('header_fixed');
        $header.addClass('out');
      }
    }

    stickySidebar();

    $(document).scroll(function () {
      stickySidebar();
    });
  }
  timer = setTimeout(function () {
    document.querySelector('header').classList.remove('out');

  }, 800);
}, false);
})







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

// mobile menu
$(() => {
  const btnMenu = document.querySelector('.burger');
  const menu = document.querySelector('.hide-menu');
  const body = document.querySelector('.overflow');
  const menuLink = document.querySelectorAll('.hide-menu .nav__link')
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

  menuLink.forEach(function (el) {
    el.addEventListener('click', function (event) {
      closeMenu();
    })
  })
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
  slidesPerView: 4,
  spaceBetween: 25,
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
    769: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
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
      slidesPerView: 1.8,
      spaceBetween: 50,
    },
    1025: {
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
// $(() => {
//   const anchors = document.querySelectorAll('a[href*="#"]')
//
//   for (let anchor of anchors) {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault()
//
//       const blockID = anchor.getAttribute('href').substr(1)
//
//       document.getElementById(blockID).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       })
//     })
//   }
// })

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
    },
    anchors: ['hero', 'advantages', 'direction', 'service', 'steps', 'projects', 'numbers', 'honors', 'reviews', 'about'],
    responsiveWidth: 1100,
    afterResponsive: function(isResponsive){
      if (isResponsive) {
        $.fn.fullpage.setAutoScrolling(false);
      } else {
        $.fn.fullpage.setAutoScrolling(true);
      }
    }
  });
});


