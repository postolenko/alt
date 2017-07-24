(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function() {

	$(".mosaik").isotope({
	  itemSelector: ".mosaik-item",
	  percentPosition: true,
	  masonry: {
		  horizontalOrder: true,
		  columnWidth: '.grid-sizer'
		}
	});

	$("select").select2({
		minimumResultsForSearch: Infinity
	});

});