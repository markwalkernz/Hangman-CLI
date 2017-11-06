// this script requires the letter script to create letter objects
var Letter = require("./Letter.js");


// constructor for the Word object
var Word = function(inputWord) {

	this.inputWord = inputWord;				//the current word
	this.wordLength = inputWord.length;		//the length of the word, including spaces, numbers etc
	this.letterArray = [];					//an array of letters in the word as objects

	//put each letter of the word (including spaces) into letterArray as an object
	for (var i = 0; i < inputWord.length; i++) {
		var newLetter = new Letter(inputWord.charAt(i));
		this.letterArray.push(newLetter);
	};

}; // end of Word constructor

module.exports = Word;