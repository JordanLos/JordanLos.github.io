/*****Image Gallery*******
*************************/
/*PURPOSE: Each of the 6 services has 2 images positioned identically 
with equal z-index. Clicking each image will fade one image out with fading the other in.*/

document.onreadystatechange = function () {
	if (document.readyState === 'complete') {

	var image1 = document.getElementsByClassName('service-image-1');
	var thumb1 = document.getElementsByClassName('service-thumb-1');
	var thumb2 = document.getElementsByClassName('service-thumb-2');
	console.log(image1[ 5 ]);

	//Fades front image out and back image in for the selected service
	function fadeToBack(serviceIndex) {
		TweenLite.to(image1[ serviceIndex ], 0.2, {opacity: 0});
		TweenLite.to(thumb1[ serviceIndex ], 0, {borderColor: "transparent"});
		TweenLite.to(thumb2[ serviceIndex ], 0, {borderColor: "white"});
	}
	//Fades back image out and front image in for the selected service
	function fadeToFront(serviceIndex) {	
		TweenLite.to(image1[ serviceIndex ], 0.2, {opacity: 1});
		TweenLite.to(thumb2[ serviceIndex ], 0, {borderColor: "transparent"});
		TweenLite.to(thumb1[ serviceIndex ], 0, {borderColor: "white"});
	}
	//Selects which of the 2 "fadeTo" functions to run based on which image was last clicked in the selected service
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
	//Gives each of the 6 services an array index, where the index will be either be 0 of 1 (if active), or 2 (if inactive)
	var clickCount = [0, 0, 0 ,0 , 0, 0]
	//Creates a toggleFade function for each service
	for (i = 0; i < clickCount.length; i++) {
		toggleFade(i);
	}

	if (window.matchMedia("(min-width: 800px)").matches) {
		document.getElementById( "contact-div" ).style.margin = "0px";
	}

	}
};
