$(document).ready(function () {
  var fadeSections = $(".services,.about, .portfolio, .features");

  fadeSections.css("opacity", 0);

  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();

    fadeSections.each(function (index, element) {
      var section = $(element);
      var sectionTop = section.offset().top - $(window).height() / 3;

      if (scrollPosition > sectionTop) {
        section.stop().animate(
          {
            opacity: 1,
          },
          200
        );
      }
    });
  });
});

setTimeout(function () {
  $(".loader").fadeOut(500);
}, 1000);