//Variables storing targets of necessary elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const roundResults = document.getElementById('round_results');
const playerDisplay = document.getElementById('player_score');
const compDisplay = document.getElementById('comp_score');

//Variables holding scores
let playerScore = 0;
let compScore = 0; 

//Function to randomly return a play for the computer
function computerPlay() {
    const plays = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
    return plays[num];
}

/*
 *Function checks whether eith player has won five rounds
 *Pops an alert with displaying the winner.
 *Reloads the page when the alert is cleared
*/
function gameOver(playerScore, compScore) {
    if(playerScore === 5) {
        alert("Game over! You win!");
        location.reload()
    } else if (compScore === 5) {
        alert("Game Over! The computer wins!");
        location.reload();
    }
};

/*
 *Function takes in the player selection and computer selection,
 *then checks for a winner. Increments and displays scores.
 *Runs gameOver function
*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        roundResults.innerText = 'Computer wins! Paper covers Rock.';
        compScore++;
        compDisplay.innerText = compScore;
        gameOver(playerScore, compScore);
    }  else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        roundResults.innerText = 'Player wins! Rock breaks Scissors.';
        playerScore++;
        playerDisplay.innerText = playerScore;
        gameOver(playerScore, compScore);
    } else if(playerSelection == 'rock'  && computerSelection == 'rock') {
        roundResults.innerText = 'Rock ties with Rock.';
    } else if(playerSelection == 'paper' && computerSelection == 'paper') {
        roundResults.innerText = 'Paper ties with Paper.';
    } else if(playerSelection == 'paper' && computerSelection == 'scissors') {
        roundResults.innerText = 'Computer wins! Scissors cuts Paper.';
        compScore++;
        compDisplay.innerText = compScore;
        gameOver(playerScore, compScore);
    } else if(playerSelection == 'paper' && computerSelection == 'rock') {
        roundResults.innerText = 'Player wins! Paper covers Rock.';
        playerScore++;
        playerDisplay.innerText = playerScore;
        gameOver(playerScore, compScore);
    } else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        roundResults.innerText = 'Player wins! Scissors cuts paper.';
        playerScore++;
        playerDisplay.innerText = playerScore;
        gameOver(playerScore, compScore);
    } else if(playerSelection == 'scissors' && computerSelection == 'scissors') {
        roundResults.innerText = 'Scissors ties with Scissors.';
    } else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        roundResults.innerText = 'Computer wins! Rock breaks Scissors.';
        compScore++;
        compDisplay.innerText = compScore;
        gameOver(playerScore, compScore);
    } else {
        roundResults.innerText = "That's not a valid play here.";
    }
}

//Event listeners for the player choice buttons. Plays a round on click.
rock.addEventListener('click', (e) => {
    playRound('rock', computerPlay());
});

paper.addEventListener('click', (e) => {
    playRound('paper', computerPlay());
});

scissors.addEventListener('click', (e) => {
    playRound('scissors', computerPlay());
});