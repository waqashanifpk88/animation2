$('.slider-products').slick({
    slidesToShow: auto,
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    asNavFor: '.products-nav'
  });
  $('.products-nav').slick({
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.slider-products',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    
  });