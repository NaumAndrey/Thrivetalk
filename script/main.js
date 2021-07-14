

// Menu burger
$(document).ready(function () {
    $(".header__burger").click(function (event) {
      $(".header__burger, .header__menu").toggleClass("active");
      $("body").toggleClass("lock");
      $(".wrapper").toggleClass("none-slider");
      $(".section-1-head").toggleClass("header-color-switch");
    });

      $(".header__link ").click(function (event) {
      $(".header__burger, .header__menu").removeClass("active");
      $(".section-1-head").removeClass("header-color-switch");
      $(".wrapper").removeClass("none-slider");
      $("body").removeClass("lock");
    });
});
  

// Header Animation
window.onscroll = function showheader() {
    let hh = document.querySelector('.section-1').offsetHeight;

    if (window.pageYOffset >  70) {
        $('.section-1-zagolovok').addClass('section-1-zagolovok-fix')
        $(".section-1-head-container").addClass('section-1-head-container-fixed')
    } else {
        $('.section-1-zagolovok').removeClass('section-1-zagolovok-fix')
        $(".section-1-head-container").removeClass('section-1-head-container-fixed')
    }
}