/*****Image Gallery*******
*************************/
/*PURPOSE: Each of the 6 services has 2 images positioned identically 
with equal z-index. Clicking each image will fade one image out with fading the other in.*/

document.onreadystatechange = function () {
	if (document.readyState === 'complete') {

	//arraya of elements used to fade in/out and restyle thumbnails
	var image1 = document.getElementsByClassName('service-image-1');
	var thumb1 = document.getElementsByClassName('service-thumb-1');
	var thumb2 = document.getElementsByClassName('service-thumb-2');

	//Fades front image out and back image in for the selected service when clicking 'image1'
	function fadeToBack(serviceIndex) {
		TweenLite.to(image1[ serviceIndex ], 0.2, {opacity: 0});
		TweenLite.to(thumb1[ serviceIndex ], 0, {borderColor: "transparent"});
		TweenLite.to(thumb2[ serviceIndex ], 0, {borderColor: "white"});
	}
	//Fades back image out and front image in for the selected service when clicking 'image1'
	function fadeToFront(serviceIndex) {	
		TweenLite.to(image1[ serviceIndex ], 0.2, {opacity: 1});
		TweenLite.to(thumb2[ serviceIndex ], 0, {borderColor: "transparent"});
		TweenLite.to(thumb1[ serviceIndex ], 0, {borderColor: "white"});
	}
	//Alternates between the two 'fadeTo' functions. arrayIndex is the same for both the clickCount array and the service index
	function toggleFade(arrayIndex) {
		image1[ arrayIndex ].onclick = function() {
			if (clickCount[arrayIndex] == 0) {
				clickCount[arrayIndex] = 1;
				return fadeToBack(arrayIndex);
			} else if (clickCount[arrayIndex] == 1) {
				clickCount[arrayIndex] = 0;
				return fadeToFront(arrayIndex);
			}
		};
	}
	//An array giving each service it's own index for counting clicks
	var clickCount = [0, 0, 0 ,0 , 0, 0]
	//Creates a toggleFade function for each service
	for (i = 0; i < clickCount.length; i++) {
		toggleFade(i);
	}

	/****LANDING ANIMATION FIX *****/
	//if the ladning animation script (located in the <head> of the html) runs below 800px, it will misplace the #contact-div should the screen move beyond 800px). This code resets the margin changed by the landing animation when the window resizes beyond 800px
	if (window.matchMedia("(min-width: 800px)").matches) {
		document.getElementById( "contact-div" ).style.margin = "0px";
	}

	}
};
