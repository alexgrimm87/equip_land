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

$(window).resize(function () {
});
//# sourceMappingURL=develop_7.js.map
