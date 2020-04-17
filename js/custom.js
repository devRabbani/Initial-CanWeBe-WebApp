addEventListener(
  document,
  'touchstart',
  function (e) {
    console.log(e.defaultPrevented); // will be false
    e.preventDefault(); // does nothing since the listener is passive
    console.log(e.defaultPrevented); // still false
  },
  Modernizr.passiveeventlisteners ? { passive: true } : false
);

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    autoplay: !0,
    smartSpeed: 700,
    loop: !0,
    autoplayHoverPause: !0,
  });
  $('.hero-text-box').waypoint(function (direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky-nav');
    } else {
      $('nav').removeClass('sticky-nav');
    }
  });
  $(function () {
    $('.roky').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({ scrollTop: target.offset().top - 60 }, 1000);
          return !1;
        }
      }
    });
  });

  $('.js-mobile-res').click(function () {
    var icon = $('.js-mobile-res i');
    var nav = $('.main-nav');
    if (icon.hasClass('ion-md-menu')) {
      icon.addClass('ion-md-close');
      icon.removeClass('ion-md-menu');
    } else {
      icon.addClass('ion-md-menu');
      icon.removeClass('ion-md-close');
    }
    nav.toggleClass('active');
  });
  $('.js-main-nav li a').on('click touch', function () {
    if (checkWidth()) {
      $('.js-mobile-res').click();
    }
  });
  function checkWidth() {
    return $(window).width() < 760;
  }
  var breakpoint = 1024;
  function loadVideo() {
    var e = document.getElementById('herovideo');
    if ($(document).width() < breakpoint + 1)
      for (; e.firstChild; ) e.removeChild(e.firstChild);
    if ($(document).width() > breakpoint) {
      if (document.querySelectorAll('#herovideo > source').length < 1) {
        var o = document.createElement('source');
        o.setAttribute('src', '/video/Words%20-%20converted.webm'),
          o.setAttribute('type', 'video/webm'),
          e.appendChild(o);
      }
      $('#herovideo')[0].play();
    }
  }
  loadVideo(),
    $(window).resize(function () {
      loadVideo();
    });
});
$(function () {
  new WOW().init();
});
