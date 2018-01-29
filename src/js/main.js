// Declaring variables
let
  slides = document.querySelectorAll('#slides .slide'),
  next = document.getElementById('next'),
  previous = document.getElementById('previous'),
  currentSlide = 1;

// Declaring previous and next buttons variables
const goToSlide = actualSlide => {
  let previousSlide,
      nextSlide,
      slide;
  // Instance the current slide
  currentSlide = actualSlide;
  // infinite sliding
  // If the current slide is the last slide it will jump to the first slide
  currentSlide > slides.length - 1 ?
    currentSlide = 0 :
    // Else if the current slide is the fisr slide it will jump to the last slide
    currentSlide < 0 ?
    currentSlide = slides.length - 1 :
    false;
  // Reseting slider's class
  for (slide of slides) {
    slide.classList.remove('showing', 'first', 'last');
  }
  /* ES5 XD in ES6 the need for a limit and counter is not required
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('showing', 'first', 'last');
    }
  */
  // adding 'showing' class to the current slide
  slides[currentSlide].classList.add('showing');
  // if currentSlide was greater than "0", subtract "1"
  previousSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  // if currentSlide was less than "0", add "1"
  nextSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  //currentSlide become previousSlide, add 'first' class.
  slides[previousSlide].classList.add('first');
  //currentSlide become nextSlide, add 'last' class.
  slides[nextSlide].classList.add('last');
};

// Advance slide
const goToNextSlide = () =>
  goToSlide(currentSlide + 1);

// Return slide
const goToPreviousSlide = () =>
  goToSlide(currentSlide - 1);


next.onclick = goToNextSlide;

previous.onclick = goToPreviousSlide;
