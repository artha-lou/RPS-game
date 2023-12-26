let playerSelection = "";
let pnum = ""
let resultSelect = ''
let computerSelection = 0;
let cnum = "";
let playerLives = 5;
let computerLives = 5;
let resultPlayRound;
let resultUpdateLives
let resultWinner
let resultEndGame

function select(pnum) {
    computerSelection = (Math.floor(Math.random()*3)+1);

    if (pnum == "rock") {
        playerSelection = 1;
        pnum = 'rock';
    } else if (pnum == "paper") {
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

    return { playerSelection, pnum, computerSelection, cnum };
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to a number
    playerSelection = Number(playerSelection);

    if (playerSelection === computerSelection) {
        return "Draw, try again!";
    } else if (playerSelection === 1 && computerSelection === 2) {
        return "Computer wins!";
    } else if (playerSelection === 1 && computerSelection === 3) {
        return "Player wins!";
    } else if (playerSelection === 2 && computerSelection === 1) {
        return "Player wins!";
    } else if (playerSelection === 2 && computerSelection === 3) {
        return "Computer wins!";
    } else if (playerSelection === 3 && computerSelection === 1) {
        return "Computer wins!";
    } else if (playerSelection === 3 && computerSelection === 2) {
        return "Player wins!";
    } else {
        return "Err";
    }
}

function updateLives(resultPlayRound) {
    if (resultPlayRound === "Player wins!") {
        computerLives--;
    } else if (resultPlayRound === "Computer wins!") {
        playerLives--;
    } else {

    }
}

function declareWinner(computerLives, playerLives) {
    if (playerLives === 0) {
        return("Computer is the winner!");
    } else if (computerLives === 0) {
        return("Player is the winner!")
    } 
}

function endGame(computerLives, playerLives) {
    if (playerLives === 0 || computerLives === 0) {
        return("Game will restart!");
    }
}

function updateResult(pnum, resultPlayRound, cnum, resultWinner, resultEndGame) {
    // Create elements
    const playerElement = document.createElement('p');
    const computerElement = document.createElement('p');
    const resultElement = document.createElement('p');
    const playerLivesElement = document.createElement('p');
    const computerLivesElement = document.createElement('p')
    const winnerElement = document.createElement('p')
    const endElement = document.createElement('p')

    // Set text content
    playerElement.textContent = `Player selected: ${pnum}`;
    computerElement.textContent = `Computer selected: ${cnum}`;
    resultElement.textContent = resultPlayRound;
    playerLivesElement.textContent = `Player Lives: ${playerLives}`;
    computerLivesElement.textContent = `Computer Lives: ${computerLives}`;
    winnerElement.textContent = resultWinner;
    endElement.textContent = resultEndGame

    // Clear existing content
    resultDiv.innerHTML = '';

    // Append elements to the resultDiv
    resultDiv.appendChild(playerElement);
    resultDiv.appendChild(computerElement);
    resultDiv.appendChild(resultElement);
    resultDiv.appendChild(playerLivesElement);
    resultDiv.appendChild(computerLivesElement);
    resultDiv.appendChild(winnerElement);
    resultDiv.appendChild(endElement);

    if (resultEndGame) {
        endElement.textContent = resultEndGame;
        // Reset the game state
        playerLives = 5;
        computerLives = 5;
    }
}



const rBtn = document.querySelector('#rBtn');
const pBtn = document.querySelector('#pBtn');
const sBtn = document.querySelector('#sBtn');
const resultDiv = document.getElementById('resultDiv');

rBtn.addEventListener("click", () => {
    pnum = "rock";
    resultSelect = select(pnum);
    resultPlayRound = playRound(playerSelection, computerSelection);
    resultUpdateLives = updateLives(resultPlayRound);
    resultWinner = declareWinner(computerLives, playerLives);
    resultEndGame = endGame(computerLives, playerLives);
    updateResult(pnum, resultPlayRound, cnum, resultWinner, resultEndGame);
})

pBtn.addEventListener("click", () => {
    pnum = "paper";
    resultSelect = select(pnum);
    resultPlayRound = playRound(playerSelection, computerSelection);
    resultUpdateLives = updateLives(resultPlayRound);
    resultWinner = declareWinner(computerLives, playerLives);
    resultEndGame = endGame(computerLives, playerLives);
    updateResult(pnum, resultPlayRound, cnum, resultWinner, resultEndGame);
})

sBtn.addEventListener("click", () => {
    pnum = "scissors";
    resultSelect = select(pnum);
    resultPlayRound = playRound(playerSelection, computerSelection);
    resultUpdateLives = updateLives(resultPlayRound);
    resultWinner = declareWinner(computerLives, playerLives);
    resultEndGame = endGame(computerLives, playerLives);
    updateResult(pnum, resultPlayRound, cnum, resultWinner, resultEndGame);
})