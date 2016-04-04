$(document).ready(function(){

var winningNumber = generateWinningNumber();
var playerGuess;
var numGuessesLeft = 5;
	

function generateWinningNumber(){
	winningNumber = Math.floor((Math.random() * 100) + 1);
}

function playerSubmitGuess(){

	if(numGuessesLeft > 0) {
		playerGuess = parseInt($("input").val());
		numGuessesLeft--;
		checkWin();
	} else {
		alert("You Are Out Of Guesses!")
	}
}

function checkWin(){
	if(playerGuess === winningNumber){
		alert("You won!");
	} else if (playerGuess < winningNumber){


		var elem = document.getElementById("info");
		elem.innerHTML = "You guessed too high! /n You have " + numGuessesLeft + " left!";

	} else {


		var elem = document.getElementById("info");
		elem.innerHTML = "You guessed too low! /n You have " + numGuessesLeft + " left!";

	}
}



$('#submitbutton').on('click',playerSubmitGuess);

});