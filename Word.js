// this script requires the letter script to create letter objects
var Letter = require("./Letter.js");


// constructor for the Word object
var Word = function(inputWord) {

	this.inputWord = inputWord;				//the current word
	this.wordLength = inputWord.length;		//the length of the word, including spaces, numbers etc
	this.letterArray = [];					//an array of letters in the word as objects

	// put each letter of the word (including spaces) into letterArray as an object
	for (var i = 0; i < inputWord.length; i++) {
		var newLetter = new Letter(inputWord.charAt(i));
		this.letterArray.push(newLetter);
	};

	// method to display the word to the user
	this.displayWord = function() {
		var displayString = "";

		for (var i = 0; i < this.wordLength; i++) {
			
			// if the letter is in the word and guessed then display the letter else display _	
			if (this.letterArray[i].inTheWord && this.letterArray[i].guessed) {
				displayString += this.letterArray[i].letter;
				displayString += " ";
			}
			else {
				displayString += "_ ";	
			};
		};

		console.log("Word is: " + displayString);

	}; // end of displayWord method

	// method to make a guess
	this.makeGuess = function(userGuess) {
console.log("userGuess: " + userGuess);
		var matchingLetter = false;
		var letterArrayLength = this.letterArray.length;

		for (var i = 0; i < letterArrayLength; i++) {

			// if userGuess matches an object in the letter array
			if(userGuess === this.letterArray[i].letter) {

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

		//if matchingLetter is false, add the letter to the array and tell the user it is a wrong guess
		if(matchingLetter = false) {
			var newLetter = new Letter(userGuess);
			newLetter.inTheWord = false;
			newLetter.guessed = true;
			console.log("Sorry, that letter is not in the word.");
		};

	}; // end of makeGuess method

}; // end of Word constructor

module.exports = Word;