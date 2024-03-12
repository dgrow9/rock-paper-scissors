function getComputerChoice(Rock, Paper, Scissors) {
    
}

function playRound (playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || 
    (playerSelection === "scissors" && computerSelection === "scissors")) {
        console.log("It's a tie!");
    }
}