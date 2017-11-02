(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function() {

	if( $(".main-slider").length > 0 ) {

		$(".main-slider").not(".slick-initialized").slick({
			dots: true,
			arrows: true,
			// autoplay: true,
			autoplaySpeed: 10000,
			speed: 1200,
			slidesToShow: 1,
			fade: true,
			appendArrows: $(".main-slider-arrows .row")
		});

	}

})