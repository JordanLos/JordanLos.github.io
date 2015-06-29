$(document).ready(function(){
//run script only byeond 800px


	/*****Image Gallery*******
	*************************/
	/*PURPOSE: Each of the 6 services has 2 images positioned identically 
	with equal z-index. Clicking each image will fade one image out with fading the other in.*/


	//Fades front image out and back image in for the selected service
	function fadeToBack(serviceIndex) {
		TweenLite.to($(".service-image-2").eq( serviceIndex ), 0.2, {opacity: 0});
		TweenLite.to($(".service-thumb-1").eq ( serviceIndex ), 0, {borderColor: "transparent"});
		TweenLite.to($(".service-thumb-2").eq ( serviceIndex ), 0, {borderColor: "white"});
	}
	//Fades back image out and front image in for the selected service
	function fadeToFront(serviceIndex) {	
		TweenLite.to($(".service-image-2").eq( serviceIndex ), 0.2, {opacity: 1});
		TweenLite.to($(".service-thumb-2").eq ( serviceIndex ), 0, {borderColor: "transparent"});
		TweenLite.to($(".service-thumb-1").eq ( serviceIndex ), 0, {borderColor: "white"});
	}
	//Selects which of the 2 "fadeTo" functions to run based on which image was last clicked in the selected service
	function toggleFade(arrayIndex) {
		$( ".service-image-2" ).eq( arrayIndex ).click(function() {
			if (clickCount[arrayIndex] == 0) {
				clickCount[arrayIndex] = 1;
				return fadeToBack(arrayIndex);
			} else if (clickCount[arrayIndex] == 1) {
				clickCount[arrayIndex] = 0;
				return fadeToFront(arrayIndex);
			}
		});
	}
	//Gives each of the 6 services an array index, where the index will be either be 0 of 1 (if active), or 2 (if inactive)
	var clickCount = [0, 0, 0 ,0 , 0, 0]
	//Creates a toggleFade function for each service
	for (i = 0; i < clickCount.length; i++) {
		toggleFade(i);
	}



//Need code to run when screen starts larger than 800
//if width > 800
//Need code to not run when screen starts smaller than 800
//If width > 800
//Need code to run when screen resizes to larger than 800
//if resize.width > 800
//Need code to not run when screen ersizes to smaller than 800
//array = []

})


