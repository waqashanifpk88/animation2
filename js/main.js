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

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();




  const sliderTop = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 60,
      slideShadows: false
    },
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      300: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 3
      },
      1200: {
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
  
  const sliderBottom = new Swiper(".gallery-single", {
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
  


