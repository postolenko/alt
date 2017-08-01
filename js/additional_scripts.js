(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function() {

	var rateVal;

	$(".mosaik").isotope({
	  itemSelector: ".mosaik-item",
	  percentPosition: true,
	  masonry: {
		  horizontalOrder: true,
		  columnWidth: '.grid-sizer'
		}
	});	

	$("select").each(function() {

		if( $(this).hasClass("ui--input-select__field") ) {

			return true;

		} else {

			$example = $("select").select2();

			$("select.search-false").select2({
				minimumResultsForSearch: Infinity
			});

		}

	});

	$(".change_preferens label").on("click", function () {

		var labelVal = $(this).attr("data-value");

		$(".selectChange").val(labelVal).trigger("change");

	});
	

	$(".rating").each(function() {

		rateVal = +( $(this).attr("data-rate") );

		$(this).rateYo({
			starWidth: "18px",
			spacing: "5px",
		    normalFill: "#ebeef0",
		    ratedFill: "#ffd44f",
		    rating: rateVal,
		    readOnly: true
		  });

	});


});