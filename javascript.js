console.log("Hello World")

let playerScore = 0
let computerScore = 0
let roundWinner = ''

const playerSelection = 'Rock';
let computerSelection = getComputerChoice();
console.log(playGame());

function playGame () {
    while (!(playerScore === 5 || computerScore === 5)) {
        computerSelection = getComputerChoice();
        playRound(computerSelection, playerSelection);
    }
    console.log('Computer score: ' + computerScore + '. Player score: '+ playerScore)
}

function playRound (computerSelection, playerSelection){
    result = determineResult(playerSelection, computerSelection)
    if (result === 'win'){
        playerScore++
    }else if (result === 'loss'){
        computerScore++
    }
    return 'It is your ' + result + '.'
}

function determineResult(playerSelection, computerSelection){
    if(computerSelection === playerSelection){
        return 'tie'
    } else if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors')||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')||
        (computerSelection === 'Paper' && playerSelection === 'Rock'))
    {
        return 'loss'
    } else{
        return 'win'
    }
}




function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    }
}


