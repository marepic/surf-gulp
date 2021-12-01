(function() {
    const slider = $('.products').bxSlider({
        pager: false,
        controls: false
    });

    $('.products-slider__arrow--direction--next').on('click', (e) => {
        e.preventDefault();
        slider.goToNextSlide();
    });

    $('.products-slider__arrow--direction--prev').on('click', (e) => {
        e.preventDefault();
        slider.goToPrevSlide();
    });
}())