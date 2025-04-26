 //Capitalize first letter of template litteral

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}



//Define function getComputerChoice()
    //SET randomNum TO RANDOM_NUMBER(1, 3)
    //SET getComputerChoice equal to rock
        //IF randomNum is 1
    //SET getComputerChoice equal to paper
        //IF randomNum is 2
    //SET getComputerChoice equal to scissors
        //IF randomNum is 3

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    switch(randomNum) {
        case 1:
            return "rock"; 
            break; 
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }

}



//Define function getHumanChoice()
    //GET user input choice of (rock, paper, scissors)
    //Return user input choice (case insensitive)

function getHumanChoice() {
    let choice = prompt ('Pick one: "Rock" || "Paper" || "Scissors"');
    return choice.toLowerCase();
}

//Define interger variable for human/computerScore with initial value 0

let humanScore = 0;
let computerScore = 0;



//Define function playRound(humanChoice, computerChoice)
    //IF humanChoice is strict equality to computerChoice
        //Tell console to log a string value representing no round winner
    //ELSE IF humanChoice is strict equality to "rock"
    //AND computerChoice is strict equlity to "scissors"
    //OR humanChoice is strict equality to "paper"
    //AND computerChoice is strict equality to "rock"
    //OR humanChoice is strict equality to "scissors"
    //AND computerChoice is strict equality to "paper"
        //Increase humanScore by 1
        //Tell console to log a string value representing the user wins
    //ELSE
        //Increase computerScore by 1
        //Tell console to log a string value representing the user lost

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}!`);
    } else {
        computerScore++;
        console.log(`You lost! ${capitalize(computerChoice)} beats ${humanChoice}!`);
    }
}



//Define function playgame()
//Move playround function  and score variables inside playGame function
//Create a for loop that calls palyRound five times

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }



    //Tell console to log a string value declaring the final score of user and computer

    console.log("\n--- Final Score ---");
    console.log(`You: ${humanScore} - Computer: ${computerScore}`);



    //Tell console to log a string value based on the final results of the game

    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("You lost. Better luck next time.");
    } else {
        console.log("It's a tie game! Try again?")
    }
}
playGame();