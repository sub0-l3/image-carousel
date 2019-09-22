let currentSlide = 0;

function init() {
    showSlide(0)
}

function plusSlides(n) {
    showSlide(currentSlide + n);
}

function showSlide(slideIndex) {
    let slides = document.getElementsByClassName('slide')
    let dots = document.getElementsByClassName("dot");
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    
    slides[currentSlide].style.display = 'none'
    dots[currentSlide].classList.remove('active')
    slides[slideIndex].style.display = 'block'
    dots[slideIndex].classList.add('active')
    currentSlide = slideIndex;

}