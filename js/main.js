// $('.slider-products').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     infinite: false,
//     asNavFor: '.products-nav'
//   });
//   $('.products-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: false,
//     centerPadding: '0px',
//     //asNavFor: '.slider-products',
//     dots: false,
//     centerMode: true,
//     focusOnSelect: true,
//     arrows: true,
    
//   });






  const sliderTop = new Swiper(".gallery-top", {
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 60,
      slideShadows: false
    },
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      300: {
        slidesPerView: 1
      },
      1100: {
        slidesPerView: 2
      },
      1650: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: false,
    loopedSlides: 3,
    slideToClickedSlide: true
  });
  
  const sliderBottom = new Swiper(".gallery-bottom", {
    initialSlide: 1,
    centeredSlides: true,
    effect: "fade",
    
    loop: false,
    loopedSlides: 3
  });
  
  sliderTop.controller.control = sliderBottom;
  sliderBottom.controller.control = sliderTop;
  
  // sliderTop.on("slideChange", function () {
  //   sliderBottom.slideTo(sliderTop.activeIndex);
  // });
  
  // sliderBottom.on("slideChange", function () {
  //   sliderTop.slideTo(sliderBottom.activeIndex);
  // });
  
