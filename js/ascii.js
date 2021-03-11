window.onload = pageLoad;

function pageLoad() {
	"use strict";

	showInitialFrame();
	document.getElementById("animation").onchange = showInitialFrame;
	document.getElementById("startbutton").onclick = startAnimation;
	document.getElementById("animationsize").onchange = changeSize;

	var refreshRate = 250;
	document.getElementById("turbo").onclick = function() {
		if(document.getElementById("turbo").checked){
			refreshRate = 50;
		} else {
			refreshRate = 250;
		}
	}
	
	var animationType = document.getElementById("animation").value;
	var count = 0;
	var framesAnimation = ANIMATIONS[animationType].split("=====\n");



	function showInitialFrame() {
		document.getElementById("turbo").onclick = function() {
		if(document.getElementById("turbo").checked){
			refreshRate = 50;
		} else {
			refreshRate = 250;
		}
	}
		if(document.getElementById("turbo").checked){
			refreshRate = 50;
		} else {
			refreshRate = 250;
		}
		var animationType = document.getElementById("animation").value;
		var framesAnimation = ANIMATIONS[animationType].split("=====\n");
		document.getElementById("mytextarea").innerHTML = framesAnimation[0];
		document.getElementById("startbutton").disabled = false; 
		document.getElementById("stopbutton").disabled = true; 
		document.getElementById("animation").disabled = false; 
	}

	function startAnimation() {
		document.getElementById("startbutton").disabled = true; 
		document.getElementById("stopbutton").disabled = false; 
		document.getElementById("animation").disabled = true; 
		document.getElementById("stopbutton").onclick = stopAnimation;

		var animationType = document.getElementById("animation").value;
		var framesAnimation = ANIMATIONS[animationType].split("=====\n");

		var myTimer = setInterval(showFrame, refreshRate);

		function showFrame() {
			if (count == framesAnimation.length-1){
				count = 0;
			}
			else {
				count++;
			}
			document.getElementById("mytextarea").innerHTML = framesAnimation[count];
			document.getElementById("turbo").onclick = setSpeed;
		}

		function setSpeed() {
			clearInterval(myTimer);
			if (document.getElementById("startbutton").disabled) {
				if(document.getElementById("turbo").checked){
					myTimer = setInterval(showFrame, 50);
				} else {
					myTimer = setInterval(showFrame, 250);
				}
			}
		}
		function stopAnimation() {
			clearInterval(myTimer);
			count = 0;
			showInitialFrame();
		}
	}

	function changeSize() {
		document.getElementById("mytextarea").style.fontSize = document.getElementById("animationsize").value;
	}

}