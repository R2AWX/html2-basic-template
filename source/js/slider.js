const hero = document.querySelector('.hero');
const prevButton = hero.querySelector('.hero__toggle--prev');
const nextButton = hero.querySelector('.hero__toggle--next');
const slides = Array.from(hero.querySelectorAll('.hero__wrapper'));
const radioButton = Array.from(hero.querySelectorAll('[name="slider"]'));
let slideIndex = 0;

function sliderScript() {
  radioButton.forEach((btn) => {
    btn.addEventListener('input', showCertainSlide);
  });
  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);
  updateSlider();
}

function showPreviousSlide() {
  if (slideIndex > 0) {
    slideIndex = slideIndex - 1;
    updateSlider();
  }
}

function showNextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex = slideIndex + 1;
    updateSlider();
  }
}

function showCertainSlide() {
  radioButton.forEach((btn, index) => {
    if (btn.checked) {
      slideIndex = index;
      updateSlider();
    }
  });
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });

  radioButton.forEach((btn, index) => {
    if (index === slideIndex) {
      btn.checked = true;
    } else {
      btn.checked = false;
    }
  });

  disableButton();
}

function disableButton() {
  if (slideIndex === 0) {
    prevButton.classList.add('hero__toggle--disabled');
  } else {
    prevButton.classList.remove('hero__toggle--disabled');
  }

  if (slideIndex === slides.length - 1) {
    nextButton.classList.add('hero__toggle--disabled');
  } else {
    nextButton.classList.remove('hero__toggle--disabled');
  }
}

export {sliderScript};
