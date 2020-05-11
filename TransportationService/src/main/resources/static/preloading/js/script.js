$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	// $('.load').delay(1000).fadeOut('fast');
	$('.loader').delay(1000).fadeOut('fast');
//	$('body').css("overflow", "scroll");
	
	$('body')
	  .delay(1000)
	  .queue(function (next) { 
	    $(this).css("overflow", "scroll"); 
	    next(); 
	  });
});