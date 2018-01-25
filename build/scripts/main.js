'use strict';

/**
* Check scroll-bar width
* exemple ->   let scroll = $.scrollbarWidth();
*/
$.scrollbarWidth = function () {
    var a, b, c;if (c === undefined) {
        a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b = a.children();c = b.innerWidth() - b.height(99).innerWidth();a.remove();
    }return c;
};

/**
* Scroll to the block
* @param {block} str - For what we click
* @param {targetBlock} str - to what we should scroll
*/
function scrollUp(block, targetBlock) {
    $(block).click(function (e) {
        var target = $(targetBlock).offset().top;

        $('body,html').stop().animate({ scrollTop: target }, 800);
        return false;

        e.preventDefault();
    });
}

/**
* Scroll animation
* @param {item} jquery obj - Wrapper for class 'animate-it';
*/
function animationBlock(item) {

    $(window).scroll(function () {
        checkForAnimate();
    });

    function checkForAnimate() {
        var bottomCheck = $(window).height() + $(window).scrollTop();
        var windowTop = $(window).scrollTop() + $(window).height() / 1.5;
        item.each(function () {
            if (windowTop > $(this).offset().top || bottomCheck > $('body').height() * 0.98) {

                var itemSect = $(this);
                var point = 0;
                itemSect.find('.animate-it').addClass('animated');

                var timer = setInterval(function () {
                    itemSect.find('.animate-delay').eq(point).addClass('animated');
                    point++;
                    if (itemSect.find('.animate-delay').length == point) {
                        clearInterval(timer);
                    }
                }, 200);
            }
        });
    }
    checkForAnimate();
}

/**
* GO TO href (smooth)
*/
function goTo() {
    $('.header__menu a').not('.js-popup').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top;
        $('body,html').animate({ scrollTop: target }, 500);
    });
}

/**
* Cut text script
* (Add to  div class "cut-text" width data-attr "data-cut"(length letters to show) )
*/
function cutText() {
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function () {
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if (text.length > value && value > 0) {
            var newText = text.substring(0, value) + filler;
            $(this).text(newText);
        }
    });
};

/**
* Functional header butter
* @param {menuMobile} jquery obj - For what we click
* @param {toggleMenu} jquery obj - to what menu we will slideToggle
*/
function headeButer(menuMobile, toggleMenu) {
    if (menuMobile) {
        menuMobile.click(function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                $(this).toggleClass('active');
                toggleMenu.stop().slideToggle();
            }
        });

        $(document).on('click touchstart', function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                var div = toggleMenu;
                if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0) {
                    toggleMenu.slideUp();
                    menuMobile.removeClass('active');
                }
            }
        });
    }
}

/**
* Expresion for numbers with spaces
* @param {x} number
* @return {string}
*/
function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

$(document).ready(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());

    goTo();
});

$(window).resize(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());
});
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
'use strict';

function videoSlider(selector) {
  $(selector).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 787,
      settings: {
        vertical: true,
        verticalSwiping: true
      }
    }]
  });

  $('.video-prev').on('click', function (e) {
    e.preventDefault();
    $('.video').each(function () {
      var el_src = $(this).attr("src");
      $(this).attr("src", el_src);
    });
    $(selector).slick('slickPrev');
  });

  $('.video-next').on('click', function (e) {
    e.preventDefault();
    var frame = $(this).siblings('.video-slider').find('.video-item iframe');
    $('.video').each(function () {
      var el_src = $(this).attr("src");
      $(this).attr("src", el_src);
    });
    $(selector).slick('slickNext');
  });
};

function colorSlider(selector) {
  $(selector).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: false
  });
}

$(document).ready(function () {
  videoSlider('.video-slider');
  colorSlider('.select-color-pic');
});
$(window).load(function () {});

$(window).resize(function () {});
//# sourceMappingURL=develop_7.js.map