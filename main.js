var slides=document.querySelectorAll("#slides .slide"),next=document.getElementById("next"),previous=document.getElementById("previous"),currentSlide=1;function goToSlide(e){var i,l;(currentSlide=e)>slides.length-1?currentSlide=0:currentSlide<0&&(currentSlide=slides.length-1);for(var s=0;s<slides.length;s++)slides[s].classList.remove("showing","first","last");slides[currentSlide].classList.add("showing"),i=currentSlide>0?currentSlide-1:slides.length-1,l=currentSlide<slides.length-1?currentSlide+1:0,slides[i].classList.add("first"),slides[l].classList.add("last")}function goToNextSlide(){goToSlide(currentSlide+1)}function goToPreviousSlide(){goToSlide(currentSlide-1)}next.onclick=goToNextSlide,previous.onclick=goToPreviousSlide;