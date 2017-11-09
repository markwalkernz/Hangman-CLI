# Hangman-CLI
Coding Boot Camp Week 11 Homework. Hangman game with a command line interface.

The game uses the inquirer node package for user inputs.

Run 'node Hangman.js' to start the game.

The game uses two constructs;

"Letter" is an object representing a letter of the alphabet. The properties of the letter indicate;

	- if it is in the current word
	
	- if it has been guessed

"Word" is an object representing the current word to be guessed, plus the status of the user's guesses.

	- The word contains an array of letter objects. the array includes both letters that are in the word and letters that the user has guessed incorrectly

	- The word contains a string representing the user's guesses to date, with blanks for letters that haven't been guessed yet

	- The word also contains a string of the user's incorrect guesses, and

	- a count of the guesses remaining.


