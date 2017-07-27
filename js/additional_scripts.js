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

	// $(".select-box.autocomplete").click(function() {

	// 	var selectCoor = $(this).offset().top;

	// 	$(".select2-container--open").css({
	// 		"top" : selectCoor + "px"
	// 	});

	// });

	$(".rating").rateYo({
		starWidth: "18px",
		spacing: "5px",
	    normalFill: "#ebeef0",
	    ratedFill: "#ffd44f"
	  });


});