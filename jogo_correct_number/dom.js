const message = document.querySelector('.message'); //.textContent = 'Correct Number!';
const ScoreUI = document.querySelector('.score');
const HighScoreUI = document.querySelector('.highscore');
const number = document.querySelector('.number');
let win = false;
const background = document.querySelector('body');

let score = 20;

// document.querySelectorAll('.a');

// const elemets = document.querySelectorAll('.a');
// elemets.forEach(elemets=>{
//     console.log(elemets)
// })

//campo input busca o valor em value
// document.querySelector('.guess').value = 23;


function displayMessage(message){
    document.querySelector('.message').textContent = message;
}


//Gera número aleatório
let secretNumber = Math.trunc(Math.random()* 20) + 1;
console.log(secretNumber);// descobri o número

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess');
    if(score>0 && !win){
        if(secretNumber == guess.value){
            displayMessage('Correct Number');
            background.style.backgroundColor = 'green';
            HighScoreUI.textContent = score;
        }else{
            score--;
            ScoreUI.textContent = score;
            guess.value > secretNumber ? displayMessage('Too hight') : displayMessage('Too low');
            if(score == 0){
                message.textContent = 'You lost the game';
                background.style.backgroundColor = 'red';
            }
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    const guess = document.querySelector('.guess');
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20) + 1;
    console.log(secretNumber);

    displayMessage('Start guessing');
    ScoreUI.textContent = score;
    number.textContent = '?';
    guess.value = '';
    background.style.backgroundColor = '#222';
})