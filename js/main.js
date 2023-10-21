$(document).ready(function() {
    var $stickyImage = $('.sticky-image'); // Image in the top section
    var $stickyImages = $('.img:not(.sticky-image)'); // Other images in the img_section

    // Function to update the sticky image in the top section
    function updateStickyImage() {
        var scrollPosition = $(window).scrollTop() + 40; // Add 100 pixels to the scroll position

        // Check if the viewport width is less than 768px (you can adjust this breakpoint)
        if ($(window).width() < 768) {
            $imgHight = $(".img img").height();
            scrollPosition += $imgHight; // Add 200 pixels for mobile
        }

        $('.descrip').each(function(index) {
            var sectionId = $(this).attr('id');
            var sectionOffset = $(this).offset().top;
            var sectionHeight = $(this).height();
            var imageSrc = 'img img' + -(index + 1);

            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                //$stickyImage.attr('src', imageSrc);
                $stickyImage.attr('class', imageSrc);
                $stickyImage.fadeIn('fast');
            }
        });
    }

    // Add a scroll event listener
    $(window).scroll(function() {
        updateStickyImage();
    });

    // Call the function initially
    updateStickyImage();
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target.classList.contains('section_1') && entry.isIntersecting) {
        // Div 1 is 50% or more in viewport
        document.querySelector('.section_1').classList.add('special-class');

        console.log(object)
        document.querySelectorAll('.descrip').forEach(d => {
            if(!d?.classList?.contains('section_1')){
                d?.classList?.remove('special-class');
            }
        });
      }
      else if(entry.target.classList.contains('section_2') && entry.isIntersecting){
        document.querySelector('.section_2').classList.add('special-class');
        document.querySelectorAll('.descrip').forEach(d => {
            if(!d?.classList?.contains('section_2')){
                d?.classList?.remove('special-class');
            }
        });
      }
      else if(entry.target.classList.contains('section_3') && entry.isIntersecting){
        document.querySelector('.section_3').classList.add('special-class');
        document.querySelectorAll('.descrip').forEach(d => {
            if(!d?.classList?.contains('section_3')){
                d?.classList?.remove('special-class');
            }
        });
      }
    });
  }, { threshold: 0.8
    // , rootMargin: "-50px 0px -50px 0px" 
}); // Trigger when 50% is in the viewport



// Observe the first div
const div1 = document.querySelector('.section_1');
observer.observe(div1);
const div2= document.querySelector('.section_2');
observer.observe(div2);
const div3 = document.querySelector('.section_3');
observer.observe(div3);

