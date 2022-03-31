let playerSelection;

function playerPlay() {
    const input = prompt("Please choose Rock, Paper or Scissors.")
    return playerSelection = input.toLowerCase();
}

function computerPlay() {
    const plays = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
    return plays[num];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('Computer wins! Paper covers Rock.');
    }  else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('Player wins! Rock breaks Scissors.');
    } else if(playerSelection == 'rock'  && computerSelection == 'rock') {
        console.log('Rock ties with Rock.');
    } else if(playerSelection == 'paper' && computerSelection == 'paper') {
        console.log('Paper ties with Paper.');
    } else if(playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('Computer wins! Scissors cuts Paper.');
    } else if(playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('Player wins! Paper covers Rock.');
    } else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('Player wins! Scissors cuts paper.');
    } else if(playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log('Scissors ties with Scissors.');
    } else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('Computer wins! Rock breaks Scissors.');
    } else {
        console.log("That's not a valid play here.");
    }
}

function game() {
    for (let i = 0; i< 5; i++) {
        playRound(playerPlay(), computerPlay())
    }
}

game();