const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let count = 0;
let choiceBtn = document.getElementsByClassName('choice');
let startBtn = document.querySelector('#start');
let userScoreText = document.querySelector('#userScore');
let botScoreText = document.querySelector('#computerScore');
let roundResult = document.getElementById('roundResult');
let totalResult = document.getElementById('totalResult');
let reloadBtn = document.getElementById('reload');

startBtn.addEventListener('click', startGame);

Array.from(choiceBtn).forEach((button)=>{
    button.disabled = true;
    button.style.opacity = '40%';
    button.style.cursor = 'not-allowed';
    button.addEventListener('click', (e)=>{
        let userChoice = e.target.id;
        console.log(userChoice);
        game(userChoice);
    })
})


function startGame(e){
    e.target.disabled = true;
    e.target.style.cursor = "not-allowed";
    e.target.style.opacity = '40%';
    Array.from(choiceBtn).forEach((button)=>{
        button.disabled = false;
        button.style.opacity = '100%';
        button.style.cursor = 'pointer';
    })
}

function game(player){
    let computer = choices[Math.floor(Math.random()*choices.length)];
    if (player === 'scissors' ){
        if (computer.toLowerCase() === 'rock'){
            roundResult.textContent = 'You lost! Computer Won! Rock beats Scissors!';
            computerScore++;

        }
        else if(computer.toLowerCase() === 'scissors'){
            roundResult.textContent = 'It\'s a draw!';
            computerScore++;
            playerScore++;
        }
        else{
            roundResult.textContent = "You Won! Scissor Cuts Paper!";
            playerScore++;
        }
    }
    else if(player === 'paper'){
        if (computer.toLowerCase() === 'rock'){
            roundResult.textContent = 'You Won! Paper Covers Rock!';
            playerScore++;
        }
        else if(computer.toLowerCase() === 'scissors'){
            roundResult.textContent = "You Lost! Scissor Cuts Paper!";
            computerScore++;
        }
        else{
            roundResult.textContent = 'It\'s a draw!';
            playerScore++;
            computerScore++;
        }
    }
    else if(player === 'rock'){
        if (computer.toLowerCase() === 'rock'){
            roundResult.textContent = 'It\'s a draw!';
            playerScore++;
            computerScore++;
        }
        else if(computer.toLowerCase() === 'scissors'){
            roundResult.textContent = "You Won! Rock beats Scissors!";
            playerScore++;
        }
        else{
            roundResult.textContent = 'You lost! Computer Won! Paper Covers Rock!';
            computerScore++;
        }
    }
    else{
        return;
    }
    userScoreText.textContent = `Your Score: ${playerScore.toString()}`;
    botScoreText.textContent = `Bot Score: ${computerScore.toString()}`;
    count++;
    if (playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore){
            totalResult.textContent = "FINAL RESULT: Hooray! You Are The Winner! 🏆";
        }
        else if(computerScore > playerScore){
            totalResult.textContent = 'FINAL RESULT: Alas, You Lost!';
        }
        else if(computerScore === playerScore){
            totalResult.textContent = 'FINAL RESULT: It\'s a tie'
        }
        Array.from(choiceBtn).forEach((button)=>{
            button.disabled = true;
            button.style.opacity = '40%';
            button.style.cursor = 'not-allowed';
        })
        reloadBtn.style.visibility = 'visible';
    }
}


