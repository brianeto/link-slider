// 3D Slider for Reece

/*=================================================
INIT
===================================================*/

on = 0;  // Init
time = 500; // Set the delay before the next click is accepted to 1 second
pos = 1; // Set init position
pos2 = 2;
pos3 = 3;

/*=================================================
CLICK FUNCTIONS
===================================================*/

// Right
$('.right').click(function(){
  rotateRight(); // Call
  on = 1; // Set delay on
});

// Left
$('.left').click(function(){
  rotateLeft(); // Call
  on = 1; // Set delay on
});

/*=================================================
AUTOPLAY
===================================================*/

play = setInterval(function(){
  rotateLeft()
},3000)

/*=================================================
ROTATE FUNCTIONS
===================================================*/

// Rotate left
function rotateLeft(){
  if(on == 0){
    $('.p_slider__item:nth-of-type(' + pos + ')').animate({'left':'200px'},200)
    $('.p_slider__item:nth-of-type(' + pos + ')').css('z-index','0')
    $('.p_slider__item:nth-of-type(' + pos2 + ')').animate({'left':'-200px'},200)
    setTimeout (function(){
      $('.p_slider__item:nth-of-type(' + pos2 + ')').css({'transform':'scale(0.6)','opacity':'0.8','webkit-filter':'blur(2px)','z-index':'1'});
      pos++;pos2++;pos3++;
      if(pos > 3){pos = 1}if(pos2 > 3){pos2 = 1;}if(pos3 > 3){pos3 = 1;}
    },400)
    $('.p_slider__item:nth-of-type(' + pos3 + ')').animate({'left':'0px'},200)
    $('.p_slider__item:nth-of-type(' + pos3 + ')').css({'transform':'scale(1)','opacity':'1','webkit-filter':'blur(0px)','z-index':'2'})
    setTimeout (function(){
      on = 0; // Accept clicks again
    },time)
  }
}

// Rotate right
function rotateRight(){
  if(on == 0){
    $('.p_slider__item:nth-of-type(' + pos3 + ')').animate({'left':'-200px'},200)
    $('.p_slider__item:nth-of-type(' + pos3 + ')').css('z-index','0')
    $('.p_slider__item:nth-of-type(' + pos2 + ')').animate({'left':'200px'},200)
    setTimeout (function(){
      $('.p_slider__item:nth-of-type(' + pos2 + ')').css({'transform':'scale(0.6)','opacity':'0.8','webkit-filter':'blur(2px)','z-index':'0'});
      pos--;pos2--;pos3--;
      if(pos < 1){pos = 3}if(pos2 < 1){pos2 = 3;}if(pos3 < 1){pos3 = 3;}
      console.log(pos,pos2,pos3)
    },400)
    $('.p_slider__item:nth-of-type(' + pos + ')').animate({'left':'0px'},200)
    $('.p_slider__item:nth-of-type(' + pos + ')').css({'transform':'scale(1)','opacity':'1','webkit-filter':'blur(0px)','z-index':'1'})
    setTimeout (function(){
      on = 0; // Accept clicks again
    },time)
  }
}

$('.p_slider__item img').hover(function(){
  clearInterval(play)
})
$('.p_slider__item img').mouseenter(function(){
  $(this).animate({'top':'-14px'},300);
})
$('.p_slider__item img').mouseout(function(){
  $(this).stop(true,false).animate({'top':'0px'},300)
  play = setInterval(function(){
    rotateLeft()
  },3000)
})
