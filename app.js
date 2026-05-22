


















function slideCarousel(direction, buttonElement) {
    var wrapper = buttonElement.closest('.slider-wrapper');

    var carousel = wrapper.querySelector('.products-carousel');

    var scrollAmount = 300;

    if (direction === 'next') {
        carousel.scrollLeft += scrollAmount;
    } else if (direction === 'prev') {
        carousel.scrollLeft -= scrollAmount;
    }

}