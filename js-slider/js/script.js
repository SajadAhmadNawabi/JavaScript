const slides = document.querySelectorAll('.slider-item');
const buttonLeft = document.querySelector('.slider__button--left');
const buttonRight = document.querySelector('.slider__button--right');

let currentSlide = 0;
const allSlides = slides.length - 1;

function changeSlide(currentSlideNumber) {
  slides.forEach((slide, index) => {
    const transform = `translateX(${100 * (index - currentSlideNumber)}%)`;

    slide.style.transform = transform;
  });
}

function nextSlide() {
  if (currentSlide === allSlides) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  changeSlide(currentSlide);
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = allSlides;
  } else {
    currentSlide--;
  }

  changeSlide(currentSlide);
}

function init() {
  changeSlide(0);
}

init();

buttonLeft.addEventListener('click', prevSlide);
buttonRight.addEventListener('click', nextSlide);
