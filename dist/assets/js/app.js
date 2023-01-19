"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//masked inputs

Inputmask({
  "mask": "+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9"
}).mask('.phone-mask');
$('[data-fancybox=""]').fancybox({
  // Options will go here
});

/* dusabled submit */

$(".js-hero-checkbox").on('change', function () {
  if ($(this).is(':checked')) {
    $(".js-hero-submit").removeAttr("disabled");
  } else {
    $(".js-hero-submit").prop('disabled', true);
  }
});
$(".js-demo-checkbox").on('change', function () {
  if ($(this).is(':checked')) {
    $(".js-demo-submit").removeAttr("disabled");
  } else {
    $(".js-demo-submit").prop('disabled', true);
  }
});
$(".js-about-checkbox").on('change', function () {
  if ($(this).is(':checked')) {
    $(".js-about-submit").removeAttr("disabled");
  } else {
    $(".js-about-submit").prop('disabled', true);
  }
});

/* mobile menu */
// mobile menu
$(function () {
  var btnMenu = document.querySelector('.burger');
  var menu = document.querySelector('.hide-menu');
  var body = document.querySelector('.overflow');
  // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  var toggleMenu = function toggleMenu() {
    menu.classList.toggle('is-open');
    // menu.style.height = heroHeight + headerHeight + 'px'
    btnMenu.classList.toggle('is-active');
    body.classList.toggle('opened-menu');
  };
  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  var closeBtn = document.querySelector('.close');
  var closeMenu = function closeMenu() {
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
    prevEl: ".direction__nav-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2
    },
    900: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
/* projects slider */
var swiperProject = new Swiper(".projects-slider", {
  loop: true,
  navigation: {
    nextEl: ".projects__nav-next",
    prevEl: ".projects__nav-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true
    },
    768: {
      autoHeight: false,
      slidesPerView: 2,
      spaceBetween: 60
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 80
    }
  }
});
/* service slider */
var swiperService = new Swiper(".service-slider", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".service__nav-next",
    prevEl: ".service__nav-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    601: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});
/* honor slider */
var swiperhonors = new Swiper(".honors-slider", {
  slidesPerView: 2.8,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".honors__nav-next",
    prevEl: ".honors__nav-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    769: {
      slidesPerView: 2.8,
      spaceBetween: 50
    }
  }
});

// tabs

document.addEventListener('DOMContentLoaded', function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs__btn_active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('tabs__content_active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('tabs__content_active');
      el.classList.add('tabs__btn_active');
    });
  });
});

// anchors
$(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');
  var _iterator = _createForOfIteratorHelper(anchors),
    _step;
  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});