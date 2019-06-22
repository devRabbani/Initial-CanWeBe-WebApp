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
    
});