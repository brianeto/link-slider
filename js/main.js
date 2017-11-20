var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 1;

function goToNextSlide(){
  goToSlide(currentSlide+1);
}

function goToPreviousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){

  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';

  var previousSlide = ((currentSlide - 1) + slides.length) % slides.length;
  var nextSlide = ((currentSlide + 1) + slides.length) % slides.length;

  slides[previousSlide].className = 'slide first';
  slides[nextSlide].className = 'slide last';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
  goToNextSlide();
};

previous.onclick = function(){
  goToPreviousSlide();
};
