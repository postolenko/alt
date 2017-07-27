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
	});

	$("select.search-false").select2({
		minimumResultsForSearch: Infinity
	});

	$(".rating").rateYo({
		starWidth: "18px",
		spacing: "5px",
	    normalFill: "#ebeef0",
	    ratedFill: "#ffd44f"
	  });


});