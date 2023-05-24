const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let count = 0;

function freshGame(){
    let readyOrNot = prompt("Are you ready for this game? (Y/N)");
    isReady(readyOrNot);
    playerScore = 0;
    computerScore = 0;
}

freshGame();

function isReady(ready){
    if (ready==="Y" || ready==="y"){
        alert("Then Let's start!")
        while (count<6){
            getPlayerChoice();
        }
    }
    else if (ready==="N" || ready==="n"){
        alert('Okay, but what are you waiting for, go get ready!')
    }
    else if(ready===null || ready==="null"){
        return;
    }
    else{
        alert("invalid answer.")
        freshGame();
    }
}

function getPlayerChoice(){
    choice = prompt("What is your selection - Rock, Paper or Scissors?(Type the full Word)")
    game(choice);
}

function game(player){
    let computer = choices[(Math.floor(Math.random() * choices.length))];
    if (player.toLowerCase() === 'scissors' ){
        if (computer.toLowerCase() === 'rock'){
            console.log('Alas, you lost! Computer Won! Rock beats Scissors!');
            computerScore++;

        }
        else if(computer.toLowerCase() === 'scissors'){
            console.log('It\'s a draw!');
            computerScore++;
            playerScore++;
        }
        else{
            console.log("You Won! Scissor Cuts Paper!")
            playerScore++;
        }
    }
    else if(player.toLowerCase() === 'paper'){
        if (computer.toLowerCase() === 'rock'){
            console.log('You Won! Paper Covers Rock!');
            playerScore++;
        }
        else if(computer.toLowerCase() === 'scissors'){
            console.log("You Lost! Scissor Cuts Paper!");
            computerScore++;
        }
        else{
            console.log('It\'s a draw!');
            playerScore++;
            computerScore++;
        }
    }
    else if(player.toLowerCase() === 'rock'){
        if (computer.toLowerCase() === 'rock'){
            console.log('It\'s a draw!');
            playerScore++;
            computerScore++;
        }
        else if(computer.toLowerCase() === 'scissors'){
            console.log("You Won! Rock beats Scissors!");
            playerScore++;
        }
        else{
            console.log('Alas, you lost! Computer Won! Paper Covers Rock!');
            computerScore++;
        }
    }
    else{
        return;
    }
    count++;
    if (count===6){
        if (playerScore > computerScore){
            console.log("FINAL RESULT: Hooray! You Are The Winner! 🏆");
        }
        else if(computerScore > playerScore){
            console.log('FINAL RESULT: Alas, You Lost!');
        }
        else if(computerScore === playerScore){
            console.log('FINAL RESULT: It\'s a tie')
        }
    }
}
