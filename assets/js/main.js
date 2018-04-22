//Hide nav collapse on click

$('.navbar-collapse a').click(function () {
	$(".navbar-collapse").collapse('hide');
});

// Display and fadeOut a loading icon 
jQuery(window).load(function () {
	//	jQuery(".navbar-brand").hide();
	jQuery(".isLoader").fadeOut(7000);
	//	jQuery(".navbar-brand").show(4000);
});

// Scroll to a certain element
$(function () {
	$('a[href*=#]').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});
});

//skillbars
$('.progressBack').each(function () {
	$(this).find('.progressLine').css({
		'width': $(this).attr('data-percent')
	});
});

// gallery

$(".btn").on("click", "button.btn", function () {
	var filterId = $(this).attr("id");
	fadeClass(filterId);
});

function fadeClass(fadeClassName) {
	var selectedClass = "div." + fadeClassName;
	$("div.all").fadeOut(500);
	$(selectedClass).fadeIn(500);
}


$('.collapse').collapse()