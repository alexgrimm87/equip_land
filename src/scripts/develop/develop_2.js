'use strict';

function reviewsSlider(selector) {
	var prev = $(selector).prev('.prev');
	var next = $(selector).next('.next');
	$(selector).slick({
		prevArrow: prev,
		nextArrow: next
	});
}

$(document).ready(function () {
	reviewsSlider('.reviews-slider');
	$('.galery-col a').fancybox();
	$('.review-popup').fancybox();

	$('.js-popup').click(function (e) {
		e.preventDefault();

		var id = $(this).attr('data-id');
		var color = $(this).attr('data-color');

		$('#order-popup input[name="form_id"]').val(id);
		$('#order-popup input[name="TITLE"]').val(color);

		$.fancybox.open({
			src: '#order-popup'
		});
	});

	// to bottom button 
	$('.to-bottom').click(function (e) {
		e.preventDefault();
		var scroll = $(this).closest('.top-banner').offset().top + $(this).closest('.top-banner').outerHeight();

		$('body,html').stop().animate({ scrollTop: scroll }, 800);
		return false;
	});
	// /to bottom button

	// show more button
	$('.more').click(function (e) {
		e.preventDefault();
		$(this).closest('.galery').find('.hidden').css('display', 'flex');
		$(this).remove();
	});
	// /show more button
});

$(window).load(function () {});

$(window).resize(function () {});
//# sourceMappingURL=develop_2.js.map
