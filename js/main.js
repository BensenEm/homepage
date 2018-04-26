
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

$('.b-btn').click(function(){
  $('#section-one').css({transform:"translateX(100%) translateY(-50%)"});
  var frontSlideBack = window.setTimeout(function(){
    $('#section-one').css({transform:"translateX(-50%) translateY(-50%)"});
    $('#section-one').removeClass('slide-in');
    $('.front-content').removeClass('slide-out');
  }, 1000);  
})

$('#leaveLetterIcon, #leaveLetterIcon2').click(function(){
  $('#section-one').removeClass('slide-in');
  //$('#leaveLetterIcon').removeClass('slide-in');
  var frontSlideBack = window.setTimeout(function(){
  $('.front-content').removeClass('slide-out')}, 1000);

});


/* WAYPOINTS */
var waypoint = new Waypoint({
    element: document.getElementById('section-one'),
    handler: function() {
      $('#header').fadeToggle();
    }
  })

  $fill= function(){
    $('container--ben').addClass('debug');
  }
  /* GOOGLE MAP*/

  
  
  function initMap() {

      let styledMapType = new google.maps.StyledMapType(
        [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ], {name: 'White'});

      let mapStylePurple = new google.maps.StyledMapType(
  
      [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8ec3b9"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1a3646"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#64779e"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#334e87"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6f9ba5"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3C7680"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#304a7d"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2c6675"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#255763"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#b0d5ce"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3a4762"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#0e1626"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#4e6d70"
                }
              ]
            }
          ], {name: 'Purple'});
        var berlin = {lat: 52.52, lng: 13.4050};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: berlin,
          mapTypeControlOptions:{
              mapTypeIds: ['white', 'purple']
          }
        });

        map.mapTypes.set('white', styledMapType);
        map.mapTypes.set('purple', mapStylePurple);
        map.setMapTypeId('white');
        map.setMapTypeId('purple');
}

/* CURSOR POSTIONS*/


/* CUBE ROTATION*/
let counter = 1;
function cuberotate(a){
  let rotateDeg = a*-90;
  console.log(rotateDeg);
  $('.cube').css({
    transform: 'rotateY('+ rotateDeg +'deg)'}
  )
  counter +=1;
};


$('#cube').click(function(){
    cuberotate(counter);
    this.target.style.setProperty('--col', 'red');
});


