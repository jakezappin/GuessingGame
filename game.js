$(document).ready(function(){

var winningNumber; 
var playerGuess;
var numGuessesLeft = 5;
var hintDisplay = false;

winningNumber = generateWinningNumber();

function generateWinningNumber(){
	random = Math.floor((Math.random() * 100) + 1);
	return random;
}

function playerSubmitGuess(){

	if(numGuessesLeft > 0) {
		playerGuess = parseInt($("input").val());
		numGuessesLeft--;
		checkWin();
	} else {
		alert("You Are Out of Guesses!")
	}
}

function checkWin(){
	if(playerGuess === winningNumber){
		alert("You won!");
	} else if (playerGuess > winningNumber){

		var elem = document.getElementById("info");
		elem.innerHTML = "You guessed too high! You have " + numGuessesLeft + " guesses left!";

	} else {

		var elem = document.getElementById("info");
		elem.innerHTML = "You guessed too low! You have " + numGuessesLeft + " guesses left!";

	}
}

function playAgain(){
	numGuessesLeft = 5;
	winningNumber = generateWinningNumber();
	hintDisplay = false;

	$("input").val('');
	$("input").attr("placeholder", "1-100");

	var elem = document.getElementById("info");
	elem.innerHTML = "Let's play!  You have " + numGuessesLeft + " guesses left!";

	var elem2 = document.getElementById("hintdisplay");
	elem2.innerHTML = " ";
}

function displayHint(){

	if(hintDisplay === false){

		var hint1 = Math.floor((Math.random() * 100) + 1);
		var hint2 = Math.floor((Math.random() * 100) + 1);
		var hints = [];

		hints.push(winningNumber);
		hints.push(hint1);
		hints.push(hint2);

		hints.sort();

		var node = document.querySelector("#hintdisplay");
		var hintStr = "One of these values is the winning number: " + hints[0] + ", " + hints[1] + ", " + hints[2] + ".";

		node.innerHTML = hintStr;

		hintDisplay = true;
	}

}


$('#submitbutton').on('click',playerSubmitGuess);
$('#playagainbutton').on('click', playAgain);
$('#hintbutton').on('click', displayHint)
$('#guess').on('keypress',function(){
	if(event.keyCode === 13){
		event.preventDefault();
		playerSubmitGuess();
	}
});

});