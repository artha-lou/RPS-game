let playerSelection = "";
let pnum = ""

let computerSelection = 0;
let cnum = "";

let playerLives = 5;
let computerLives = 5;

let resultValue;
let result;

function select(playerSelection) {
    computerSelection = (Math.floor(Math.random()*3)+1);

    if (playerSelection == "rock") {
        playerSelection = 1;
        pnum = 'rock';
    } else if (playerSelection == "paper") {
        playerSelection = 2;
        pnum = 'paper'
    } else {
        playerSelection = 3;
        pnum = 'scissors'
    }
    
    cnum = computerSelection
    if (cnum == 1) {
    cnum = "rock";
    } else if (cnum == 2) {
    cnum = "paper";
    } else {
    cnum = "scissors";
    }

    return { playerSelection, pnum, computerSelection, cnum }
}

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
        return("Err");
    }
}

const rBtn = document.querySelector('#rBtn');
const pBtn = document.querySelector('#pBtn');
const sBtn = document.querySelector('#sBtn');
const resultDiv = document.getElementById('resultDiv');

rBtn.addEventListener("click", () => {
    playerSelection = "rock";
    resultValue = select();
    const result = playRound(playerSelection, computerSelection);
    resultDiv.textContent = `Player selected: ${pnum}\n${result}`;
    resultDiv.textContent += `\nComputer selected: ${cnum}`;
})

pBtn.addEventListener("click", () => {
    playerSelection = "paper";
    resultValue = select()
    const result = playRound(playerSelection, computerSelection);
    resultDiv.textContent = `Player selected: ${pnum}\n${result}`;
    resultDiv.textContent += `\nComputer selected: ${cnum}`;
})

sBtn.addEventListener("click", () => {
    playerSelection = "scissors";
    select(playerSelection);
    result = playRound(playerSelection, computerSelection);
    resultDiv.textContent = `Player selected: ${playerSelection}\n${result}`;
    resultDiv.textContent += `\nComputer selected: ${cnum}`;
    console.log(select())
    console.log(playRound())
})



/*function game(playerSelection, computerSelection) {
    while (playerLives != 0 && computerLives != 0) {
        const select = select(playerSelection, computerSelection)
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
console.log(resultValue)*/