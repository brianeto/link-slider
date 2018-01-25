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
/// Searching current slide value
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
// removing slider's class
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('showing', 'first', 'last');
  }
// adding 'showing' class for the current slide
  slides[currentSlide].classList.add('showing');
// if currentSlide was greater than "0", subtract "1"
  previousSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
// if currentSlide was less than "0", add "1"
  nextSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
//currentSlide become previousSlide, add 'first' class.
  slides[previousSlide].classList.add('first');
//currentSlide become nextSlide, add 'last' class.
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
