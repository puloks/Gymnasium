// navbar scroll
$(window).scroll(function(){
     var scrolling = $(this).scrollTop()
     if(scrolling > 10){
       $("nav").addClass("navdown")
     }else{
        $("nav").removeClass("navdown")
     }
     if(scrolling > 10){
       $(".backtop").fadeIn(1000)
     }else{
        $(".backtop").fadeOut(1000)
     }
     
})
// backtop button
$(".backtop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },2000
  )
},)

// banner sdlider

$('.banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:false,
    nextArrow:false,
    dots:true
  });

  // venobox
  new VenoBox({
    selector: ".my-video-links"
});
// testimonial
$('.testcontainer').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow:false,
  nextArrow:false,
  dots:true
});
// counter
$('.counter').counterUp({
  delay: 30,
  time: 1000
});
// colortab start
$('#examplaTab').colorfulTab();
// colortab end
// brand slider
$('.brandslider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll:1,
  prevArrow:".prev",
  nextArrow:".next",
  dots:false
});

// typed js

var typed = new Typed('.element', {
  strings: ['YMNASIUM'],
  typeSpeed: 200,
  loop:true
});
var typed = new Typed('.elemen', {
  strings: ['YMNASIUM'],
  typeSpeed: 200,
  loop:true
});
var typed = new Typed('.typ', {
  strings: ['YMNASIUM'],
  typeSpeed: 200,
  loop:true
});
var typed = new Typed('.loader', {
  strings: ['OADING...'],
  typeSpeed: 150,
  loop:true
});

// preloader
$('.js-preloader').preloadinator({

  animation: 'fadeOut',

  animationDuration: 2000

});



