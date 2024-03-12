function getComputerChoice(Rock, Paper, Scissors) {
    
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock!";
        }
        else if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors!";
        }
        else if (computerSelection === "rock") {
            return "It's a Tie! You both chose Rock!";
        }
        else {
            return "There's been an error.  Try again.";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock!";
        }
        else if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper!";
        }
        else if (computerSelection === "paper") {
            return "It's a Tie! You both chose Paper!";
        }
        else {
            return "There's been an error.  Try again.";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors!";
        }
        else if (computerSelection === "paper") {
            return "You win! Scissors beats Paper!";
        }
        else if (computerSelection === "scissors") {
            return "It's a Tie! You both chose Scissors!";
        }
        else {
            return "There's been an error.  Try again.";
        }
    }
    else {
        return "There's been an error.  Please choose either rock, paper, or scissors."
    }
}