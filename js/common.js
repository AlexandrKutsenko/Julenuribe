$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).on('load', function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel({
// 		items:1,
// 		loop:true,
//         autoplay:true,
// 		autoWidth:true,
// 		center:true,
//         autoplayTimeout:2000
// 	});
// });



$(function(){
    $('.hero-slider').owlCarousel(
    	{
		items:1,
		loop:true,
        autoplay:true,
		autoWidth:true,
		center:true,
		smartSpeed: 4000
	}
	);
    $('.hero-slider2').owlCarousel(
    	{
		items:1,
		loop:true,
        autoplay:true,
		autoWidth:true,
		center:true,
		rtl:true,
        smartSpeed: 4000
	}
	);
});
