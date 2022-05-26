/*

Envy by WeTheme (http://www.wetheme.com)
Custom JS

Last Update:
2nd December 2014
- Added Sidr code

*/

// Mobile Browser Menu

$("select#mobile-menu").change(function() {
  window.location = $(this).find("option:selected").val();
});

// Zoom!

$(document).ready(function(){
  $('.featured-image-div').zoom();		
  $('a.image-swap').click(function() {
    var newImage = $(this).attr('href');
    $( '.featured-image-div img' ).attr({ src: newImage }); 
    return false;
  });
  
  
});

// FancyBox

$(document).ready(function() {
	$(".fancybox").fancybox();
});

$(document).ready(function() {
	$(".fancybox-instagram").fancybox({
		padding : 0
	});
});

// Sidr

$(document).ready(function() {
	$('.slide-menu').sidr({
		side: 'right'
	});
});

$('#responsive-menu-button').sidr({
	name: 'sidr-mobile',
	source: '#mobile-navigation'
}); 

// Select or Die




/*----------------------------------------*/

$(document).ready(function() {
	const mobileLink = document.querySelectorAll('.sidr-class-nav li a');
	const mobileCart = document.getElementById('responsive-cart-button');
	const allImages = document.querySelectorAll('img');
	allImages.forEach(element => {
		element.setAttribute('data-pin-nopin','nopin');
	})
	mobileLink.forEach(element => {
		element.addEventListener('click',(e)=>{
			gtag('event', 'click', {
				'event_label': e.target.innerText,
				'event_category': 'Main Nav'
			  });
			//ga("gtm10.send", {hitType: "event", eventCategory: "Main Nav", eventAction: "click", eventLabel: e.target.innerText})
		})
	})
	mobileCart.addEventListener('click',function(w){
		w.preventDefault();
		goCart.fetchAndOpenCart();
	});
});


$.fn.is_on_screen = function() {
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height() - 220;
 
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
 
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$(document).ready(function() {
	if ($('.swipe-hand').length > 0) { // if target element exists in DOM
		if ($('.swipe-hand').is_on_screen()) { // if target element is visible on screen after DOM loaded
			$('.swipe-hand').addClass('swipe-hand-fade');
		} 
	}
});

$(window).scroll(function() { // bind window scroll event
	if ($('.swipe-hand').length > 0) { // if target element exists in DOM
		if ($('.swipe-hand').is_on_screen()) { // if target element is visible on screen after DOM loaded
			$('.swipe-hand').addClass('swipe-hand-fade-scroll');

		}
	}
});

// Upsell on Side cart
$(document).ready(function() {
	$('.upsell-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		prevArrow: "<button class='slick-prev slick-arrow' aria-label='Previous' type='button' style='display: inline-block;'><svg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 1L1 9.47059L8.11111 17' stroke='black'/></svg></button>",
		nextArrow: "<button class='slick-next slick-arrow' aria-label='Next' type='button' style='display: inline-block;'><svg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 8.52941L1.88889 0.999999' stroke='black'/></svg></button>",
		responsive: [
			{
				breakpoint: 768,
			  	settings: {
					slidesToShow: 2,
					slidesToScroll: 2
			  	}
			}
		]
	});
});