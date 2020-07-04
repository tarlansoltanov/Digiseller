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

})