$(document).ready(function() {

	$(".mosaik").isotope({
	  itemSelector: ".mosaik-item",
	  percentPosition: true,
	  masonry: {
		  horizontalOrder: true,
		  columnWidth: '.grid-sizer'
		}
	});

});