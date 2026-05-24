// 1. Images ka Array
var heroImages = [
    "images/fathersday.jpg",
    "images/sale.jpg"

];

var index = 0;

function changeimg() {
    var banner = document.getElementById("heroimg");

    index = index + 1;

    if (index == heroImages.length) {
        index = 0;
    }

    banner.style.backgroundImage = "url('" + heroImages[index] + "')";
}

function previmg() {
    var banner = document.getElementById("heroimg");

    index = index - 1;

    if (index < 0) {
        index = heroImages.length - 1;
    }

    banner.style.backgroundImage = "url('" + heroImages[index] + "')";
}




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




function showMenu() {
    var menu = document.getElementById("accountMenu");

    if (menu) {
        menu.classList.add("active-menu");
    }
}

function hideMenu() {
    var menu = document.getElementById("accountMenu");

    if (menu) {
        menu.classList.remove("active-menu");
    }
}





function showLangMenu() {
    var langMenu = document.getElementById("langMenu");

    if (langMenu) {
        langMenu.classList.add("active-lang-menu");
    }
}

function hideLangMenu() {
    var langMenu = document.getElementById("langMenu");

    if (langMenu) {
        langMenu.classList.remove("active-lang-menu");
    }
}