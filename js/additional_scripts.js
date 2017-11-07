(function($){

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;	

	$(window).on("load",function() {

		getScrollBar();

	});

	$(window).resize(function() {

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		getScrollBar();

	});

	function getScrollBar() {

		if( bodyWidth <= 768 ) {

			$(".main-nav-block").mCustomScrollbar();			

		} else {

			$(".main-nav-block").mCustomScrollbar("destroy");

		}

	}

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

});