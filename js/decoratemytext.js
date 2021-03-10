function pageLoad() {
	let decorationButton = document.getElementById("increaseButton");
	let blingCheckbox = document.getElementById("bling");
	let myText = document.getElementById("mytext");
	decorationButton.onclick = increaseTextSize;
	blingCheckbox.onchange = blingIt;


	//timer function
	function increaseTextSize() {  
		setInterval(()=>{
			if (myText && myText.value.trim() != "") {        
				myText.style.fontSize = parseInt(getComputedStyle(myText).fontSize) + 2 + "px";
			}
		},500)     

	}


	//function to make the text bigger
	function biggerFunction() {
		myText.style.fontSize = parseInt(getComputedStyle(myText).fontSize) + 2 + "px";
	}

	//function to add some css styling when checked
	function blingIt() {
		if (blingCheckbox.checked) {
			myText.style.fontWeight = "bold";
			myText.style.color = "green";
			myText.style.textDecoration = "underline";
		} else {
			myText.style.fontWeight = "";
			myText.style.color = "";
			myText.style.textDecoration = "";
		}
	}

}

window.onload = pageLoad;





