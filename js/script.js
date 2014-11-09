var map = L.map('map').setView([40.778997, -73.968973], 14);

// L.tileLayer('http://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png', {
//     maxZoom: 18
// }).addTo(map);
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

var museumIcon = L.icon({
    iconUrl: 'img/museum.png',
    shadowUrl: 'img/shadow.png',

    iconSize:     [32, 37], // size of the icon
    shadowSize:   [51, 37], // size of the shadow
    iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 37],  // the same for the shadow
    popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
});


//Museums

//Metropolitan                     
var metropolitanMarker = L.marker([40.779437,-73.963244], {icon: museumIcon}).addTo(map).on('click', onClick1);
//American
var americanMarker = L.marker([40.781324,-73.973988], {icon: museumIcon}).addTo(map).on('click', onClick2);
//Modern
var modernMarker = L.marker([40.7610348,-73.9740922], {icon: museumIcon}).addTo(map).on('click', onClick3);
//Brooklyn
var brooklynMarker = L.marker([40.6656235,-73.9631053], {icon: museumIcon}).addTo(map).on('click', onClick4);
//Moving
var movingMarker = L.marker([40.7580902,-73.9233623], {icon: museumIcon}).addTo(map).on('click', onClick5);
//Frick
var frickMarker = L.marker([40.77097,-73.967384], {icon: museumIcon}).addTo(map).on('click', onClick6);

function onClick1(e) {
    // $('#aboutMetro').on('click',function(){
	$('#masked1').fadeIn(250);
	$('.popupMetro').fadeIn(250);
	$('#imageMuseum1').css('background-image',"url('img/metropolitan2.jpg')");
}
// // for american
// $('#aboutAmerican').on('click',function(){
function onClick2(e) {
	$('#masked2').fadeIn(250);
	$('.popupAmerican').fadeIn(250);
	$('#imageMuseum2').css('background-image',"url('img/american2.jpg')");	
}
// });

// // for modern
// $('#aboutModern').on('click',function(){
function onClick3(e) {
	$('#masked3').fadeIn(250);
	$('.popupModern').fadeIn(250);
	$('#imageMuseum3').css('background-image',"url('img/modern2.jpg')");	
}

// });

// // for brooklyn
// $('#aboutBrooklyn').on('click',function(){
function onClick4(e) {
	$('#masked4').fadeIn(250);
	$('.popupBrooklyn').fadeIn(250);
	$('#imageMuseum4').css('background-image',"url('img/brooklyn2.jpg')");
}
// });
// // for moving
// $('#aboutMoving').on('click',function(){
function onClick5(e) {
	$('#masked5').fadeIn(250);
	$('.popupMoving').fadeIn(250);
	$('#imageMuseum5').css('background-image',"url('img/moving2.jpg')");	
}

// });

// // for frick
// $('#aboutFrick').on('click',function(){
function onClick6(e) {
	$('#masked6').fadeIn(250);
	$('.popupFrick').fadeIn(250);
	$('#imageMuseum6').css('background-image',"url('img/frick2.jpg')");	
}

// });
// }

//listeners for marker hovers

metropolitanMarker.on('mouseover',function(){
	$('.metropolitan').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.metropolitan').toggleClass('hover');
	});

americanMarker.on('mouseover',function(){
	$('.american').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.american').toggleClass('hover');
	});

modernMarker.on('mouseover',function(){
	$('.modern').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.modern').toggleClass('hover');
	});

brooklynMarker.on('mouseover',function(){
	$('.brooklyn').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.brooklyn').toggleClass('hover');
	});

movingMarker.on('mouseover',function(){
	$('.moving').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.moving').toggleClass('hover');
	});

frickMarker.on('mouseover',function(){
	$('.frick').toggleClass('hover');
})
	.on('mouseout',function(){
		$('.frick').toggleClass('hover');
	});


//listener for box hover
$('.museum').hover(function(){
	$(this).toggleClass('hover');
},function(){
	$(this).toggleClass('hover');
});

//recenter the map on click
$('.metropolitan').on('click',function(){
	map.panTo(new L.LatLng(40.779437,-73.963244),{animate: true, duration: 1.0});
	$('#imageMuseum').css('background-image',"url('img/metropolitan.jpg')");
});

$('.american').on('click',function(){
	map.panTo(new L.LatLng(40.781324,-73.973988),{animate: true, duration: 1.0});
	$('#imageMuseum').css('background-image',"url('img/american.jpg')");
});

$('.modern').on('click',function(){
	map.panTo(new L.LatLng(40.7610348,-73.9740922),{animate: true, duration: 1.0});
	$('#imageMuseum').css('background-image',"url('img/modern.jpg')");
});

$('.brooklyn').on('click',function(){
	map.panTo(new L.LatLng(40.6656235,-73.9631053),{animate: true, duration: 1.0});
	$('#imageMuseum').css('background-image',"url('img/brooklyn.jpg')");
});

$('.moving').on('click',function(){
	map.panTo(new L.LatLng(40.7580902,-73.9233623),{animate: true, duration: 1.0});
	$('#imageMuseum').css('background-image',"url('img/moving.jpg')");
});

$('.frick').on('click',function(){
	map.panTo(new L.LatLng(40.77097,-73.967384),{animate: true, duration: 1.0});
	$('#imageMuseum').css('background-image',"url('img/frick.jpg')");
});

// popup listeners

// $('#about').on('click',function(){
// 	$('#mask').fadeIn(250);
// 	$('.popup').fadeIn(250);
// });

// $('.close').on('click',function(){
// 	$(this).parent().fadeOut(250);
// 	$('#mask').fadeOut(250);
// });

// TESTING POP upon clicking Marker


// for metro
$('#aboutMetro').on('click',function(){
	$('#masked1').fadeIn(250);
	$('.popupMetro').fadeIn(250);

});

// for american
$('#aboutAmerican').on('click',function(){
	$('#masked2').fadeIn(250);
	$('.popupAmerican').fadeIn(250);
});

// for modern
$('#aboutModern').on('click',function(){
	$('#masked3').fadeIn(250);
	$('.popupModern').fadeIn(250);
});

// for brooklyn
$('#aboutBrooklyn').on('click',function(){
	$('#masked4').fadeIn(250);
	$('.popupBrooklyn').fadeIn(250);
});

// for moving
$('#aboutMoving').on('click',function(){
	$('#masked5').fadeIn(250);
	$('.popupMoving').fadeIn(250);
});

// for frick
$('#aboutFrick').on('click',function(){
	$('#masked6').fadeIn(250);
	$('.popupFrick').fadeIn(250);
});

$('.closer').on('click',function(){
	$(this).parent().fadeOut(250);
	$('#masked1').fadeOut(250);
});

$('.closer').on('click',function(){
	$(this).parent().fadeOut(250);
	$('#masked2').fadeOut(250);
});

$('.closer').on('click',function(){
	$(this).parent().fadeOut(250);
	$('#masked3').fadeOut(250);
});

$('.closer').on('click',function(){
	$(this).parent().fadeOut(250);
	$('#masked4').fadeOut(250);
});

$('.closer').on('click',function(){
	$(this).parent().fadeOut(250);
	$('#masked5').fadeOut(250);
});

$('.closer').on('click',function(){
	$(this).parent().fadeOut(250);
	$('#masked6').fadeOut(250);
});


