console.log("Hello World")

let playerScore = 0
let computerScore = 0
let roundWinner = ''

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playGame(computerSelection, playerSelection));


function playGame (computerSelection, playerSelection){
    if(computerSelection === playerSelection){
    roundWinner = 'tie'
    }

    if(
    (computerSelection === 'Rock' && playerSelection === 'Scissors')||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')||
    (computerSelection === 'Paper' && playerSelection === 'Rock')
    ){
        computerScore++
        roundWinner = 'You lose. ' + computerSelection + ' beats ' + playerSelection
    }


    if(
    (playerSelection === 'Rock' && computerSelection === 'Scissors')||
    (playerSelection === 'Paper' && computerSelection === 'Rock')||
    (playerSelection === 'Scissors' && computerSelection === 'Paper') 
    ){
        playerScore++
        roundWinner = 'You win this round! ' + playerSelection + ' beats ' + computerSelection
    }
        document.getElementById('roundWinner').innerHTML = roundWinner
        return
}




function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'Rock'
            break;
        case 1:
            return 'Paper'
            break;
        case 2:
            return 'Scissors'
            break;
    }
}


