// Do not remove this line
const prompt = require("syncprompt");
const randomNumber = Math.ceil(Math.random() * 20);

let enteredNumber = prompt("Guess a number from 1 to 20: ");
let numGuesses = 1;

while (enteredNumber != randomNumber) {
	if (enteredNumber == randomNumber) {
		console.log(`You Are Right! ${randomNumber} It Only Took You ${numGuesses} Times!`);
	} else if (enteredNumber >= randomNumber) {
		console.log("That is to High");
	} else if (enteredNumber <= randomNumber) {
		console.log("That is to Low");
	}
	enteredNumber = prompt("Please Try Again: ");
	numGuesses++;
}
