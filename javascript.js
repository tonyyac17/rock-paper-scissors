console.log("Hello World")

let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playGame (computerSelection, playerSelection){
    if(computerSelection === playerSelection)
    roundWinner = 'tie'
}
    if(
    (computerSelection === 'Rock' && playerSelection === 'Scissors')||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')||
    (computerSelection === 'Paper' && playerSelection === 'Rock')
    ){
        computerScore++
        roundWinner = 'You lose.' + computerSelection + ' beats ' + playerSelection
    }


    if(
    (playerSelection === 'Rock' && computerSelection === 'Scissors')||
    (playerSelection === 'Paper' && computerSelection === 'Rock')||
    (playerSelection === 'Scissors' && computerSelection === 'Paper') 
    ){
        playerScore++
        roundWinner = 'You win this round!' + playerSelection + ' beats ' + computerSelection
    }



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}