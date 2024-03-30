$(function () {
  $('.header-slider').slick({
    dots: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 371,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplayspeed: 2000,
        }

      }
    ]

  });

  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 891,
        settings: {
          arrows: false,
          vertical: false,
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 461,
        settings: {
          arrows: false,
          vertical: false,
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    fade: true,
    asNavFor: '.product__name',
    arrows: false
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')

  });


});