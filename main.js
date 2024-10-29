$(document).ready(function(){
    
$('#carousel-img').slick({
    autoplay: true
});

$('#carousel-img2').slick({
    autoplay: true
});
    
});

const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton")

const mobileMenu = document.querySelector("#mobileMenu")

hamburgerButton.addEventListener("click", function(){
    mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function(){
    mobileMenu.classList.remove("flex");
})