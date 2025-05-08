const playerSelection = document.querySelector("#choices button");


const roundWin = "You win! 😄";
const roundLose = "You loose! 😞"
const roundTie = "It's a tie! 🤝"
const gameWin = "🏆 Final Result: You are the winner!";
const gameLose = "💻 Final Result: Computer wins!";
const gameTie = "🤝 Final Result: It's a tie!";

let playerScore = 0;
let computerScore = 0;
let round = 0;
const maxRound = 5

function(playerSelection) {
	if (round >= maxRound) return;

	const choices = ["rock", "paper", "scissors"];
	const computerSelection = document.querySelectorAll("#computerSelection");
	computerSelection = [Math.floor(Math.random) * choices.length];

	if (playerSelection === computerSelection) {
		result = roundTie;
	} else {
		switch(playerSelection) {
			case "rock":
				result = (computerSelection === "scissors") ? roundWinwin : roundLose;
				break;
			case "paper":
				result = (computerSelection === "rock") ? roundWin : roundLose;
				break;
			case "scissors":
				result = (computerSelection === "paper") ? roundWin : roundLose;
				break;
		}
	}
}

