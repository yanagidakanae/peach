$(function () {
  $('.question').on('click', function () {
    const $clickedQuestion = $(this);
    const $answer = $clickedQuestion.next('.answer');
    const $faqItem = $clickedQuestion.closest('dl');

    const isOpen = $faqItem.hasClass('active');

    $('.answer').slideUp().css('opacity', 0);
    $('.faq dl').removeClass('active');

    if (!isOpen) {
      $faqItem.addClass('active');

      $answer.slideDown(function () {
        $answer.css('opacity', 1);
      });
    }
  });

  $(".event").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
