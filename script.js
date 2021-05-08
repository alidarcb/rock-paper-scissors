function computerPlay(){
    let nrandom = Math.floor(Math.random()*3);
    let chosenHand;
    if (nrandom == 0){
        chosenHand = 'rock';
    } else if (nrandom == 1){
        chosenHand = 'paper';
    } else {
        chosenHand = 'scissors';
    }
    return chosenHand;
}
function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let message;
    if (playerSelection == computerSelection){
        message = "tie";
    } else if (playerSelection == 'rock'){
        if (computerSelection == 'scissors'){
            message = "player";
        } else {
            message = "computer";
        }
    } else if (playerSelection == 'scissors'){
        if (computerSelection == 'rock'){
            message = "computer";
        } else {
            message = "player";
        }
    } else {
        if (computerSelection == 'rock'){
            message = "player";
        } else {
            message = "computer";
        }
    }
    return message;
}

function increaseScore(winner){
    let winnerSpan = document.getElementById(winner);
    let winnerScore = parseInt(winnerSpan.innerHTML);
    winnerScore += 1;
    winnerSpan.innerHTML =  winnerScore;
    return winnerScore;   
}

function resetScore(){
    let scores = document.querySelectorAll('span');
    scores.forEach(span => {
        span.innerHTML = '0';
    });    
}


const buttons = document.querySelectorAll('img');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        let winnerRound = round(button.id, computerPlay());
        let newScore = increaseScore(winnerRound);  
        if (newScore == 5){
            resetScore();
            alert(winnerRound + ' won the game! The scores were reset');            
        }
    })
})
const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    resetScore();
})