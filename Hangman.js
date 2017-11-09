// Coding Boot Camp Week 11 homework. Hangman game using constructors and node.

// required files and node packages
var Word = require("./Word.js");
var inquirer = require("inquirer");

// array of words to use for the hangman game
var wordArray = ["MOONLIGHT", "SPOTLIGHT", "BIRDMAN", "TWELVE YEARS A SLAVE", "ARGO", "THE ARTIST", "THE KINGS SPEECH", "THE HURT LOCKER", "SLUMDOG MILLIONAIRE", "NO COUNTRY FOR OLD MEN", "THE DEPARTED", "CRASH", "MILLION DOLLAR BABY", "THE LORD OF THE RINGS", "CHICAGO", "A BEAUTIFUL MIND", "GLADIATOR", "AMERICAN BEAUTY", "SHAKESPEARE IN LOVE", "TITANIC", "THE ENGLISH PATIENT", "BRAVEHEART", "FORREST GUMP", "SCHINDLERS LIST", "UNFORGIVEN", "THE SILENCE OF THE LAMBS", "DANCES WITH WOLVES"];

// function to reset the game variables and start a new game
function playGame(){

	var randomNumber = Math.floor(Math.random()*wordArray.length);

	var currentWord = new Word(wordArray[randomNumber]);

	var gameOver = false;

	// function to play a round of the game, including recursion at the end if the word hasn't been guessed
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
						playGame();
					};
				});
			}; // end of game over function

			// make a guess
			currentWord.makeGuess(answer.userLetter);

			// check if game over or play another round
			if (currentWord.remainingGuesses == 0) {
			 	console.log("Sorry, you have run out of guesses.")
			 	gameOver();
			 }
			else {
				if (currentWord.guessedWord === currentWord.inputWord) {
					console.log("Congratulations, you've guessed the word!");
					gameOver();
				}
				else {
					playRound();
				};
			};
		});
	}; // end of playRound function

	currentWord.updateGuess();

	// play the first round
	playRound();

}; // end of playGame function

// call the first game
console.log("\nWelcome to Movie Hangman!\r")

playGame();