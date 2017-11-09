// this script requires the letter script to create letter objects
var Letter = require("./Letter.js");


// constructor for the Word object
var Word = function(inputWord) {

	this.inputWord = inputWord;				//the correct word
	this.wordLength = inputWord.length;		//the length of the word, including spaces, numbers etc
	this.letterArray = [];					//an array of letters as objects
	this.guessedWord = "";					//the word that the user has guessed, including blanks
	this.remainingGuesses = 10;				//initial number of guesses

	// put each letter of the word (including spaces) into letterArray as an object
	for (var i = 0; i < inputWord.length; i++) {
		var newLetter = new Letter(inputWord.charAt(i));
		this.letterArray.push(newLetter);
	};


	// method to make a guess
	this.makeGuess = function(userGuess) {
		var alreadyGuessed = false;
		var correctGuess = false;
		var letterArrayLength = this.letterArray.length;

		for (var i = 0; i < letterArrayLength; i++) {

			// if userGuess matches the current letter from the letter array
			if(userGuess.toUpperCase() === this.letterArray[i].letter) {

				// if letter has already been guessed, set alreadyGuessed to true
				if(this.letterArray[i].guessed) {
					alreadyGuessed = true;
				}

				// if letter has not already been guessed
				else {
					// and if letter is in the word, set the letter to guessed and correctGuess to true
					if(this.letterArray[i].inTheWord) {
						this.letterArray[i].guessed = true;
						correctGuess = true;
					}; // note: if letter is not in the word, correctGuess will remain false
				};
			};
			// note: if userGuess does not match the current letter,
			// alreadyGuessed and correctGuess will both remain false

		}; // end loop through letterArray

		// if not correct guess and not already guessed,
		// add the letter to the array and tell the user it is a wrong guess
		if(!correctGuess && !alreadyGuessed) {
			var newLetter = new Letter(userGuess.toUpperCase());
			newLetter.inTheWord = false;
			newLetter.guessed = true;
			this.letterArray.push(newLetter);
			this.remainingGuesses = this.remainingGuesses -1;
			console.log("Sorry, that letter is not in the word.");
			console.log("Remaining Guesses: " + this.remainingGuesses);
		};

		// if already guessed, display message to user
		if(alreadyGuessed) {
			console.log("You've already guessed '" + userGuess + "', please try again");
		};

		// if correctGuess, display message to user
		if(correctGuess) {
			console.log("Correct!");
		};

		// update the guessedWord with correctly guessed letters and blanks
		this.updateGuess();

	}; // end of makeGuess method

	// method to update the guessedWord with blanks and guessed letters and display it
	this.updateGuess = function() {
		this.guessedWord = "";

		for (var i = 0; i < this.wordLength; i++) {
			
			// if the letter is in the word and guessed then display the letter else display blank	
			if (this.letterArray[i].inTheWord && this.letterArray[i].guessed) {
				this.guessedWord += this.letterArray[i].letter;
			}
			else {
				this.guessedWord += "-";	
			};
		};

		console.log("\nMovie Name: " + this.guessedWord);

	}; // end of updateGuess method

}; // end of Word constructor

module.exports = Word;