// need fs, inquirer

// Word is an object. Properties are word, number of letters.
// Each letter is an object. Properties are letter, in the word (T/F), guessed (T/F).

// start message. Start Y/N?

// if no, play again is false

// loop while play again is true

	// select random word from array.
	// Create word object and solution object.
	// initialise guesses array.
	// initialise remaining guesses counter.

	// loop

		// User guesses a letter

		// if letter already in guesses array, display "already guessed, try again"

		// if letter not guessed, create a letter object and add to guesses array.

			// if letter in the word, display "correct". Change guessed to true, update solution.

			// if letter not in the word, display "incorrect". Reduce remaining guesses by one.

	// until word is guessed or remaining guesses = 0

	// if word is guessed, congratulations!

	// if remaining guesses = 0, sorry.

	// play again? (T/F)

// end play again loop

// end game


var Word = require("./Word.js");


var newWord = new Word("Hello");

console.log(newWord);