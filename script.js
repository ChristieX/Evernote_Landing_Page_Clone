$(document).ready(function () {

  // casourel - reviews section
  function updateActiveImage(index) {
    $(".casourel-buttons img").removeClass("active");
    $(".casourel-buttons img").eq(index).addClass("active");
  }

  $(".casourel-buttons img").on("click", function () {
    var index = $(this).data("bs-slide-to");
    updateActiveImage(index);
  });

  $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
    updateActiveImage(e.to);
  });

  // cards section
  const $scrollContainer = $('#scrollContainer');
    const scrollAmount = $('.scroll-card').outerWidth(true);

    $('.scroll-button.left').on('click', function () {
      $scrollContainer.animate({ scrollLeft: '-=' + scrollAmount }, 300);
    });

    $('.scroll-button.right').on('click', function () {
      $scrollContainer.animate({ scrollLeft: '+=' + scrollAmount }, 300);
    });

    // accordion - use case section
  $('.accordion-button').on('click', function () {
    const newImage = $(this).data('image');
    if (newImage) {
      $('#accordion-display-image').attr('src', newImage);
    }
  });

});


