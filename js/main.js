  var flipcardAtFrontside = true;

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
})
$anim2.hover(function(){
    $(this).trigger('startRumble');
    setTimeout(function(){ 
        $anim2.trigger('stopRumble')}, 1500)
})

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

/* Calculates Height of Section One, as Content there is positioned */
var flipcardAtFrontside = true;
var updateSectionOneSize = function() {
  
  if(flipcardAtFrontside){
    var height_front = $('.frontside').height();
    var padding_front = parseInt($('.frontside').css("padding-top"));
    flipcardAtFrontside = !flipcardAtFrontside;
  }
  else {
    var height_front = $('.backside').height();
    var padding_front = parseInt($('.backside').css("padding-top"));
    flipcardAtFrontside = !flipcardAtFrontside;
  }
  var padding_card = parseInt($('#cardcontainer').css("padding-top"));
  console.log(padding_front);
  var totalHeight_sectionOne = height_front + 2*padding_front + 2*padding_card;
  console.log(totalHeight_sectionOne);
  $('#section-one').css({height: totalHeight_sectionOne});};

  document.addEventListener('DOMContentLoaded', updateSectionOneSize(), false);
  



