function getComputerChoice(Rock, Paper, Scissors) {
    
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock!";
        }
        else if (computerSelection === "scissors") {
            return "You win! Rock beats scissors!";
        }
        else if (computerSelection === "rock") {
            return "It's a Tie! You both chose rock!";
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
            return "You lose! Scissors beats paper!";
        }
        else if (computerSelection === "paper") {
            return "It's a Tie! You both chose paper!";
        }
        else {
            return "There's been an error.  Try again.";
        }
    }
    
}