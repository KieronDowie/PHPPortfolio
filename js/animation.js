$(document).ready(function(){
  //Blue fade in text
  setTimeout(function(){
      $('.highlight').animate({'color':"#3d44ff"},500);
  },500);
  //Resizing the h1
  resizeH(3,0.1,'em');
  setInterval(function(){
    resizeH(3,0.1,'em');
  }, 500);
  //Moving buttons for the carousel
  $('.leftImg, .rightImg').click(moveCarousel);
})
