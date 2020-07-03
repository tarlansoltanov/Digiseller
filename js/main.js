
let counter = false;
const navbar = document.getElementById('navbar');
const button = document.querySelector('.mobile_button');
const size = document.getElementsByTagName('body').clientWidth;

if(size<1200){
    navbar.style.display = 'block';
}

button.addEventListener('click', () => {
    if (counter == 1) {
        navbar.style.display = 'none';
        button.style.right = 0;

    }
    else{
        navbar.style.display = 'block';
        button.style.right = 299 + "px";
    }
    counter = !counter;

})