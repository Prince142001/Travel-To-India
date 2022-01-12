var slideIndex = 0;
showSlides();

function showSlides() {
    var imageSlides = document.getElementsByClassName("imageSlides");
    var slideShowDot = document.getElementsByClassName("slideShowDot");

    for (let i = 0; i < imageSlides.length; i++) {
        imageSlides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > imageSlides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slideShowDot.length; i++) {
        slideShowDot[i].className = slideShowDot[i].className.replace(" active", "");
    }

    imageSlides[slideIndex - 1].style.display = "block";
    slideShowDot[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000);
}