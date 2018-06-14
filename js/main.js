
/* LANDING ANIMATIONS */
$anim1 = $('#anim1').jrumble({
    x: 4,
	y: 4,
    rotation: 3,
    opacity: true,
    opacityMin: .75
});
$anim1.hover(
    function(){ $(this).trigger('startRumble');}, 
    function(){$(this).trigger('stopRumble');},
);
$anim2 = $('#anim2').jrumble({
  y:1,
  x:10
});
$anim2.hover(function(){
  $(this).trigger('startRumble');
  setTimeout(function(){ 
      $anim2.trigger('stopRumble')}, 1500)
});


/* ANIMATION ON LOAD */
window.onload = function(){
  $anim1.trigger('startRumble');
  setTimeout(function(){ 
    $anim1.trigger('stopRumble')}, 1500);
  setTimeout(function(){ 
    $anim2.trigger('startRumble')}, 1500);
  setTimeout(function(){
    $anim2.trigger('stopRumble')}, 3000)
  }; 
  
  



/* TOGGLE FORM FIELD*/
$('#contact>h1').click(function(){
  $('#contact>h1').toggle();
  $('#contact #form-container').toggle();
  $('#contact #x-icon').css({"z-index" : 10 })
}) 
$('#contact svg#x-icon').click(function(){
  $('#contact>h1').toggle();
  $('#contact #form-container').toggle();
  $('#contact #x-icon').css({"z-index" : -1 })
}) 

/* TOGGLE IMPRESSUM */
$('#impressum #x-icon').click(function(){
  $('#impressum-wrapper').toggle();
})

$('#footer #imp, #footer #ds').click(function(){
  $('#impressum-wrapper').toggle();
})
/* TOGGLE WIR */
$('#wir>h1').click(function(){
  $('#wir #stripes, #wir .slick-one').toggle();
  $('#wir>h1').addClass('special');
  $('#wir #x-icon').css({"z-index" : 10 })
  $('.slick-one').slick({
    slidesToShow: 1,
     mobileFirst:true,
     autoplay: true,
     autoplaySpeed: 3000,
     dots: true,
     arrows:false,
     pauseOnHover:false,
     adaptiveHeight: false,
   });
})
$('#wir #x-icon').click(function(){
  $('#wir #stripes, .slick-one').toggle();
  $('#wir>h1').removeClass('special');
  $('#wir #x-icon').css({"z-index" : -1 });
  $('.slick-one').slick('unslick');
})
/* SLICK SLIDE WIR */

$(document).ready(function(){
 
});

/* CONFIRM DATENSCHUTZ*/
$('#checkmark').click(function(){
  $('#mark').toggle();

});

/* FILL SVG WITH LINES*/
window.onload = function(){
  let start = -100;
  let end =-40;
  let fixWidth = 8;
  let linesAmount = 30;
  let width= Array.from(Array(linesAmount).keys(), x => x-linesAmount/2+1);
  let width_multiplicator=3;
  for(var count = 0; count<linesAmount; count++){
    if (width[count]>0){
      width[count] = width[count]*-1;
    }
  };
  width= Array.from(width, x=>(x+linesAmount/2+1)*.075);
  console.log(width);

  for(var count = 0; count<linesAmount; count++){

    var line = d3.select('#wir>svg').append("line")
    .attr("x1", start+ count*fixWidth)
    .attr("y1", 51)
    .attr("x2", end+count*fixWidth)
    .attr("y2", -2)
    .attr("stroke", "url(#nightsky)")
    .attr("stroke-linecap", "square")
    .attr("stroke-width", width[count]*width_multiplicator);
   
  }
 
  };

/* INPUT FORMS FILLED */
function toggleFill(elem, turnOn){
    if (turnOn == true) {
      elem.addClass('filled');
      elem.find('.label--ben').addClass('filled');
      elem.find('.container--ben.before').css({'display':'block'});
    }
    else {
      elem.removeClass('filled');
      elem.find('.label--ben').removeClass('filled');
      elem.find('.container--ben.before').css({'display':'none'});
    }

};

$('input, textarea').blur(function()
{
    if( $(this).val().length == 0 ) {
      turnOn = false;
    }
    else turnOn=true;
    toggleFill($(this).parent('div'), turnOn);
    console.log($(this));
}); 

$('input, textarea').click(function()
{
    toggleFill($(this).parent('div'), true);
    console.log($(this));
});
$('input, textarea').focus(function()
{
    toggleFill($(this).parent('div'), true);
    console.log($(this));
});

/* MAIL BUTTON EFFECT*/
$('#mail-button').click(function() {
  $('.front-content').addClass('slide-out');
  var frontSlideBack = window.setTimeout(function(){
    $('#section-one').addClass('slide-in');
/*     $('#leaveLetterIcon').addClass('slide-in');
 */  }, 300);
});


/* RETURN FROM MAIL Effect*/

/* $('.b-btn').click(function(){
  $('#section-one').css({transform:"translateX(100%) translateY(-50%)"});
  var frontSlideBack = window.setTimeout(function(){
    $('#section-one').css({transform:"translateX(-50%) translateY(-50%)"});
    $('#section-one').removeClass('slide-in');
    $('.front-content').removeClass('slide-out');
  }, 1000);  
}) */

$('#leaveLetterIcon, #leaveLetterIcon2').click(function(){
  $('#section-one').removeClass('slide-in');
  //$('#leaveLetterIcon').removeClass('slide-in');
  var frontSlideBack = window.setTimeout(function(){
  $('.front-content').removeClass('slide-out')}, 1000);

});

/* Flip Flipcard  */
$('#marker').click(function(){
 $('#flipcard').css({transform:"rotateY(180deg)"});
 updateSectionOneSize();
});

$('#x-icon').click(function(){
  $('#flipcard').css({transform:"rotateY(0deg)"});
  updateSectionOneSize();
/*   $('.backside').css({display:"none"});
 */
});




