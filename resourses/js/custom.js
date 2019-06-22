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
    /* Scroll Nav*/
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
    
});