// Declaring variables
var
  slides = document.querySelectorAll('#slides .slide'),
  next = document.getElementById('next'),
  previous = document.getElementById('previous'),
  currentSlide = 1;

// Declaring previous and next buttons variables
function goToSlide(n) {
  var previousSlide;
  var nextSlide;
// Instance the current slide
  currentSlide = n;

  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('showing', 'first', 'last');
  }

  slides[currentSlide].classList.add('showing');

  previousSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  nextSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;

  slides[previousSlide].classList.add('first');
  slides[nextSlide].classList.add('last');
}

// Advance slide
function goToNextSlide() {
  goToSlide(currentSlide + 1);
}
// Return slide
function goToPreviousSlide() {
  goToSlide(currentSlide - 1);
}

next.onclick = goToNextSlide;

previous.onclick = goToPreviousSlide;
