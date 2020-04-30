$(function(){

  //Fixed Header фиксированнная шапка после прокрутки интро
let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos =$(window).scrollTop();
let nav=$("#nav")
let navToggle=$("#navToggle");

checkScroll(scrollPos,introH);
$(window).on("scroll resize",function(){
  //следим за событием при скроле, загрузки и мобильных телефонов
introH = intro.innerHeight();
scrollPos=$(this).scrollTop();

checkScroll(scrollPos,introH);

});

function checkScroll(scrollPos,introH){
  if(scrollPos >introH ){
    header.addClass("fixed");
    }else{
      header.removeClass("fixed");
    }
}

//smoth scroll
$("[data-scroll]").on("click",function(event){
event.preventDefault();
let elementID=$(this).data('scroll');
let elementOffset = $(elementID).offset().top;

nav.removeClass("show");

$("html,body").animate({
  scrollTop:elementOffset - 70
},700);
});

// navToggle//


navToggle.on("click",function(event){
event.preventDefault();
nav.toggleClass("show")
});

/*Reviews <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>*/ 
let slider=$("#reviewsSlider");
slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true,
  arrows:false,
  dots:true
});


});//закрывает все функции