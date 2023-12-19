let playerSelection = "";
let pnum = playerSelection.toLowerCase()

let computerSelection = 0;
let cnum = "";

let playerLives = 5;
let computerLives = 5;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return("Draw, try again!")
    } else if (playerSelection == 1 & computerSelection == 2) {
        return("Computer wins!");
    } else if (playerSelection == 1 & computerSelection == 3) {
        return("Player wins!");
    } else if (playerSelection == 2 & computerSelection == 1) {
        return("Player wins!");
    } else if (playerSelection == 2 & computerSelection == 3) {
        return("Computer wins!"); 
    } else if (playerSelection == 3 & computerSelection == 1) {
        return("Computer wins!");
    } else if (playerSelection == 3 & computerSelection == 2) {
        return("Player wins!");
    } else {
        return("Please try again");
    }
}

function convert(playerSelection, computerSelection) {
    playerSelection = prompt("rock, paper, scissors?")
    computerSelection = (Math.floor(Math.random()*3)+1);

    pnum = playerSelection.toLowerCase()
    if (pnum == "rock") {
     playerSelection = 1;
    } else if (pnum == "paper") {
     playerSelection = 2;
    } else {
     playerSelection = 3;
    }

    cnum = computerSelection
    if (cnum == 1) {
    cnum = "rock";
    } else if (cnum == 2) {
    cnum = "paper";
    } else {
    cnum = "scissors";
    }
}

function game(playerSelection, computerSelection) {
while (playerLives != 0 && computerLives != 0) {

    const choices = convert(playerSelection, computerSelection)
    const result = playRound(playerSelection, computerSelection)

    if (result === "Player wins!") {
        computerLives--;
    } else if (result === "Computer wins!") {
        playerLives--;
    } else {
        console.log("It's a draw!")
    }
    console.log(result)
    console.log("Computer Lives:", computerLives, "Computer Selection:", cnum)
    console.log("Player Lives:", playerLives, "Player Selection:", pnum)

    if (playerLives === 0) {
        return("Computer is the winner!");
    } else if (computerLives === 0) {
        return("Player is the winner!")
    } 
}
}

const resultValue = game()
console.log(resultValue)