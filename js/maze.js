$(document).ready(pageLoad);

function pageLoad() {
	$("#start").click(startGame);
	var gameStatus = true;
}

function startGame() {
	$("#status").text("Game On! Best of Luck 🤞");
	gameStatus = true;
	$(".boundary").hover(endGame);
	$("#maze").mouseleave(endGame);	
	$(".boundary").removeClass("youlose");
	$("#end").hover(gameWon);
}

function endGame() {
	if (gameStatus) {
		$(".boundary").addClass("youlose");
		$("#status").text("Oh no! You lost 😭");
		gameStatus = false;
		var x = document.getElementById("audio"); 
		x.play(); 
	}
}

function gameWon() {
	if (gameStatus) {
		$("#status").text("You won! Congratulations 🥳🎉");
		gameStatus = false
	}
}