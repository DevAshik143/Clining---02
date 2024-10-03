( function($) {
  'use strict';
$(function(e) {


/*-------------------------------------------------------------------------------
  Mobile Nav and Toggles
  -------------------------------------------------------------------------------*/
  $(".aside-trigger").on('click', function(){
    $("body").toggleClass('aside-open');
  });

   $(".sigma_aside .menu-item-has-children > a").on('click', function(e) {
    var submenu = $(this).next(".sub-menu");
    e.preventDefault();

    submenu.slideToggle(200);
  });


  /*-------------------------------------------------------------------------------
  Search Trigger
  -------------------------------------------------------------------------------*/
  $(".search-trigger").on('click', function(e) {
    $(".search-form-wrapper").toggleClass('open');
  });    

/*-------------------------------------------------------------------------------
	  Sticky-Header
	-------------------------------------------------------------------------------*/
$(window).scroll(function(){
  var sticky = $('#header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

/*-------------------------------------------------------------------------------
    Video
  -------------------------------------------------------------------------------*/
$('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
  $('.gallery-thumb').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

/*------------------------------------------------------------------
  Intro-Slider
  -------------------------------------------------------------------*/
  $('#intro .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{items:1, nav:false, dots:true},
        600:{items:1},
        1000:{items:1}
    }
  });
	
/*------------------------------------------------------------------
	Testimonials-Slider
	-------------------------------------------------------------------*/
	$('#testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	dots:true,
	autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	});

/*------------------------------------------------------------------
  Post Gallery Slider
  -------------------------------------------------------------------*/
  $('#post-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
  });
  });

  /*-------------------------------------------------------------------------------
  Counter Js
-------------------------------------------------------------------------------*/

$(".counter").each(function() {
  var $this = $(this);
  $this.one('inview', function(event, isInView) {
    if (isInView) {
      $this.countTo({speed: 2000});
    }
  });
}); 	
	
/*------------------------------------------------------------------
	Sidebar-Menu
	-------------------------------------------------------------------*/
	$("#menu_toggle").on('click', function(e) {
	 $("#sidebar_nav, #overlay_bg").toggleClass("show");
	 });
	 $("#overlay_bg").on('click', function(e) {
	 $("#sidebar_nav, #overlay_bg").toggleClass("show");
	 });

   /*-------------------------------------------------------------------------------
  Map Trigger
  -------------------------------------------------------------------------------*/
  $(".map-marker").on('mouseover', function(){

    var parent = $(this).closest('.map-markers');
    parent.find('.active').removeClass('active');
    $(this).addClass('active');

  })
	 
/*------------------------------------------------------------------
	Gallery
	-------------------------------------------------------------------*/
	$(window).on('load', function(){
    var $container = $('.galleryContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.galleryFilter a').on('click',function(){
        $('.galleryFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});

  /*-------------------------------------------------------------------------------
  Instagram Feed
  -------------------------------------------------------------------------------*/
  $('.widget-insta').each(function(){
    $.instagramFeed({
      'username': $(this).data('username'),
      'container': '#' + $(this).attr('id'),
      'display_profile': false,
      'display_biography': false,
      'display_gallery': true,
      'display_captions': false,
      'styling': false,
      'items': parseInt($(this).data('items')),
      'items_per_row': parseInt($(this).data('items_per_row')),
      'lazy_load': true,
    });
  });
	
})(jQuery);