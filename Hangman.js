var Word = require("./Word.js");
var inquirer = require("inquirer");

var currentWord = new Word("HELLO WORLD");

var gameOver = false;

currentWord.updateGuess();

// play a round of the game, including recursion at the end if the word hasn't been guessed
function playRound() {
	inquirer
	.prompt(
	  {
	    type: 'input',
	    name: 'userLetter',
	    message: 'Please guess a letter:'
	  })
	.then(function(answer) {
		
		// game over function
		function gameOver() {
			inquirer
			.prompt(
			  {
			    type: 'input',
			    name: 'playAgain',
			    message: 'Would you like to play again [y/n]?',
			    choices: ['y','n']
			  })
			.then(function(answer) {
				if(answer.playAgain === 'y') {
					console.log("Yes selected");
				};
			});
		}; // end of game over function

		// make a guess
		currentWord.makeGuess(answer.userLetter);

		// if the whole word has been guessed then game over else play another round
		if (currentWord.guessedWord === currentWord.inputWord) {
			console.log("Congratulations, you've guessed the word!");
			gameOver();
		}
		else {
			playRound();
		};
	});
}; // end of playGame function


playRound();