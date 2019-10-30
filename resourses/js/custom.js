$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:1,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true
  });
    
     $(".hero-text-box").waypoint(function(direction){
     if  (direction == "down") {
       $("nav").addClass("sticky-nav");
      }else{
        $("nav").removeClass("sticky-nav");  
      }
    });
    /* Scroll Nav */  
        $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    }); 
   
    /*MOBILE NAV*/
   $('.js-mobile-res').click(function(){
     var icon = $('.js-mobile-res i');
     var nav = $('.main-nav');
     
     if (icon.hasClass('ion-md-menu')){
       icon.addClass('ion-md-close');
       icon.removeClass('ion-md-menu');
     }else{
       icon.addClass('ion-md-menu');
       icon.removeClass('ion-md-close');
     }
     nav.toggleClass('active')  
   });
});
$(function(){
  new WOW().init();
});