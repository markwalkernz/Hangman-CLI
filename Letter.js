
// constructor for the Letter object
var Letter = function(inputLetter,position) {

	this.letter = inputLetter;	//the letter
	this.inTheWord = true;		//true if the letter is in the word
	this.guessed = false;		//true if the letter has been guessed before

	// a space is automatically set to guessed = true
	if (inputLetter == " ") {this.guessed = true};

}; // end of Letter constructor

module.exports = Letter;