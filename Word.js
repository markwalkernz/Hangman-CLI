// this script requires the letter script to create letter objects
var Letter = require("./Letter.js");


// constructor for the Word object
var Word = function(inputWord) {

	this.inputWord = inputWord;				//the current word
	this.wordLength = inputWord.length;		//the length of the word, including spaces, numbers etc
	this.letterArray = [];					//an array of letters as objects
	this.guessedWord = "";					//the word that the user has guessed, including blanks

	// put each letter of the word (including spaces) into letterArray as an object
	for (var i = 0; i < inputWord.length; i++) {
		var newLetter = new Letter(inputWord.charAt(i));
		this.letterArray.push(newLetter);
	};


	// method to make a guess
	this.makeGuess = function(userGuess) {
		var matchingLetter = false;
		var letterArrayLength = this.letterArray.length;

		for (var i = 0; i < letterArrayLength; i++) {

			// if userGuess matches an object in the letter array
			if(userGuess.toUpperCase() === this.letterArray[i].letter) {

				matchingLetter = true;

				// if letter has already been guessed
				if(this.letterArray[i].guessed) {
					console.log("You've already guessed " + userGuess + ", please try again");
				}

				// if letter has not already been guessed
				else {
					// if letter is in the word
					if(this.letterArray[i].inTheWord) {
						this.letterArray[i].guessed = true;
						console.log("Correct Guess!");
					};
				};
			};

		}; // end loop through letterArray

		// if matchingLetter is false, add the letter to the array and tell the user it is a wrong guess
		if(!matchingLetter) {
			var newLetter = new Letter(userGuess);
			newLetter.inTheWord = false;
			newLetter.guessed = true;
			console.log("Sorry, that letter is not in the word.");
		};

		// update the word that has been guessed with blanks and guessed letters
		this.updateGuess();

	}; // end of makeGuess method

	// method to update the guessedWord with blanks and guessed letters and display it
	this.updateGuess = function() {
		this.guessedWord = "";

		for (var i = 0; i < this.wordLength; i++) {
			
			// if the letter is in the word and guessed then display the letter else display _	
			if (this.letterArray[i].inTheWord && this.letterArray[i].guessed) {
				this.guessedWord += this.letterArray[i].letter;
				//this.guessedWord += " ";
			}
			else {
				this.guessedWord += "_";	
			};
		};

		console.log("\nWord is: " + this.guessedWord);

	}; // end of updateGuess method


}; // end of Word constructor

module.exports = Word;