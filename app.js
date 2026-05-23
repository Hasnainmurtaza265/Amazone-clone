// 1. Images ka Array
var heroImages = [
    "images/fathersday.jpg",
    "images/sale.jpg"

];

// Index track karne ke liye variable (0 matlab pehli image)
var index = 0;

// 2. Agli Image par jaane ka function
function changeimg() {
    // getElementById se HTML ka element uthaya
    var banner = document.getElementById("heroimg");

    // Index ko 1 barhao
    index = index + 1;

    // IF: Agar index barhte barhte array ki lambai (length) ke barabar ho jaye
    if (index == heroImages.length) {
        index = 0; // Toh wapas pehli image (0) par le ao
    }

    // Background image badal do
    banner.style.backgroundImage = "url('" + heroImages[index] + "')";
}

// 3. Pichli Image par jaane ka function
function previmg() {
    var banner = document.getElementById("heroimg");

    // Index ko 1 kam karo
    index = index - 1;

    // IF: Agar index kam hote hote 0 se neeche (minus me) chala jaye
    if (index < 0) {
        index = heroImages.length - 1; // Toh use aakhri image par le jao
    }

    // Background image badal do
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

















// 🎁 READY TO USE HOVER BOX JAVASCRIPT 🎁

// 1. Mouse lane par box dikhane ka function
function showMenu() {
    var menu = document.getElementById("accountMenu");

    if (menu) {
        menu.classList.add("active-menu");
    }
}

// 2. Mouse hatane par box chhupane ka function
function hideMenu() {
    var menu = document.getElementById("accountMenu");

    if (menu) {
        menu.classList.remove("active-menu");
    }
}

















// 🌍 SIRF LANGUAGE HOVER BOX KI JAVASCRIPT 🌍

// 1. Language button par mouse aane par menu show karne ke liye
function showLangMenu() {
    var langMenu = document.getElementById("langMenu");

    if (langMenu) {
        langMenu.classList.add("active-lang-menu");
    }
}

// 2. Language button se mouse hatne par menu hide karne ke liye
function hideLangMenu() {
    var langMenu = document.getElementById("langMenu");

    if (langMenu) {
        langMenu.classList.remove("active-lang-menu");
    }
}