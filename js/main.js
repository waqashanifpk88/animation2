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