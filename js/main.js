let counter = false;
const navbar = document.getElementById('navbar');
const button = document.querySelector('.mobile_button');
const size = document.getElementsByTagName('body').clientWidth;

button.addEventListener('click', () => {
    if (counter == 1) {
        navbar.classList.add('hide');
        button.style.right = 0;
    }
    else{
        navbar.classList.remove('hide');
        button.style.right = 299 + "px";
    }
    counter = !counter;

});
$('.slider_inner .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    lazyLoad: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            dots: true,
            slideBy: 1,
            dotsEach: 1,

        },
        768: {
            center: false,
            items: 1,
            dots: true,
            margin: 30,
            stagePadding: 0,
            slideBy: 1,
            dotsEach: 1,

        },
        1024: {
            center: true,
            items: 1,
            slideBy: 1,
            dotsEach: 1,
        }

    }
});