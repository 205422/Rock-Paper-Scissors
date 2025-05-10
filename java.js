//Define selection choices
const choices = ["rock", "paper", "scissors"];

//Get references to all necessary DOM elements used in game
const buttons = document.querySelectorAll("#choices button");
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const roundDisplay = document.querySelector("#roundNum");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const resetBtn = document.querySelector("#resetBtn");

//Create game message constants
const roundWin = "You win! 😄";
const roundLose = "You lose! 😞"
const roundTie = "It's a tie! 🤝"
const gameWin = "🏆 Final Result: You are the winner!";
const gameLose = "💻 Final Result: Computer wins!";
const gameTie = "🤝 Final Result: It's a tie!";

//Initialize score and round tracking variables for the game
let playerScore = 0;
let computerScore = 0;
let round = 0;
const maxRound = 5

function isGameOver() {
	return round >= maxRound;
}

//============================
//▶️ Main Game Function
//============================

//Play one round:
//Randomly select computer's choice
//Compares with the player selection
//Updates round counter, scores, and displays result
//Ends game and declares result after max rounds
function playGame(playerSelection) {
	if (isGameOver()) return;

	const computerSelection = choices[Math.floor(Math.random() * choices.length)];

	playerDisplay.textContent = playerSelection;
	computerDisplay.textContent = computerSelection;

	let result;

	if (playerSelection === computerSelection) {
		result = roundTie
	} else {
		switch(playerSelection) {
			case "rock":
				result = (computerSelection === "scissors") ? roundWin : roundLose;
				break;
			case "paper":
				result = (computerSelection === "rock") ? roundWin : roundLose;
				break;
			case "scissors":
				result = (computerSelection === "paper") ? roundWin : roundLose;
				break;
		}
	}

	//Increment score based on result
	if (result === roundWin) {
		playerScore++;
	} else if (result === roundLose) {
		computerScore++;
	}

	resultDisplay.textContent = result;
	playerScoreDisplay.textContent = playerScore;
	computerScoreDisplay.textContent = computerScore;

	//Reset result text color before setting new one
	resultDisplay.classList.remove("greenText", "redText");

	switch(result) {
		case roundWin:
			resultDisplay.classList.add("greenText");
			break;
		case roundLose:
			resultDisplay.classList.add("redText");
			break;
	}

	round++;
	roundDisplay.textContent = `${round} of ${maxRound}`;

//============================
//🏁 End-of-Game Logic
//============================

	//Determine reult of game
	if (isGameOver ()) {
		resultDisplay.classList.remove("greenText", "redText");

		if(playerScore > computerScore) {
			resultDisplay.textContent = gameWin;
			resultDisplay.classList.add("greenText");
		} else if (playerScore < computerScore) {
			resultDisplay.textContent = gameLose;
			resultDisplay.classList.add("redText");
		} else {
			resultDisplay.textContent = gameTie;
		}

	//Disable choice buttons when game ends
	document.querySelectorAll("#choices button").forEach(button => {
		button.disabled = true;
		button.style.opacity = "0.5";
		button.style.cursor = "not-allowed";
	});
	}
}

//Add event listener for player game buttons
buttons.forEach(button => {
	button.addEventListener("click", () => {
		const choice = button.getAttribute("data-choice");
		playGame(choice);
	});
});

//============================
//🔁 Reset Button
//============================

//Add event listener for reset button
resetBtn.addEventListener("click", () => {
	playerScore = 0;
	computerScore = 0;
	round = 0;
	resultDisplay.textContent = "";
	playerDisplay.textContent = "";
	computerDisplay.textContent = "";
	playerScoreDisplay.textContent = "0";
	computerScoreDisplay.textContent ="0";
	roundDisplay.textContent = `${round} of ${maxRound}`;
	buttons.forEach(button => {
		button.disabled = false;
		button.style.opacity = "1";
		button.style.cursor = "pointer";
	});
});