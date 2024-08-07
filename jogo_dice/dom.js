let scoreFirst = document.getElementById('score--0');
let scoreSecond = document.getElementById('score--1');

let valueCurrentOne = document.getElementById('current--0');
let valueCurrentTwo = document.getElementById('current--1');

let diceImg = document.querySelector('.dice');

let playerOne = document.querySelector('.player--0');
let playerTwo = document.querySelector('.player--1');
// console.log(typeof playerOne)

let activePlayer = 0;
// console.log(typeof activePlayer)

function alterPlayer() {
    //Se eu sou o player 2(1) então me remova do ativo e passe a vez para o player 1(0)
    if (activePlayer === 1) {
        playerTwo.classList.remove('player--active')
        playerOne.classList.add('player--active');
        activePlayer = 0;
    }
    else {
        playerOne.classList.remove('player--active');
        playerTwo.classList.add('player--active');
        activePlayer = 1;
    }
    // console.log(activePlayer)
}

function restartTheGame() {
    scoreFirst.textContent = 0;
    scoreSecond.textContent = 0;

    valueCurrentOne.textContent = 0;
    valueCurrentTwo.textContent = 0;

    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');

    playerOne.classList.remove('player--winner');
    playerTwo.classList.remove('player--winner');

    playerOne.classList.remove('name');
    playerTwo.classList.remove('name');
}

window.onload = function () {
    playerOne.classList.add('player--active');
    scoreFirst.textContent = 0;
    scoreSecond.textContent = 0;
}

document.querySelector('.btn--new').addEventListener('click', restartTheGame);

document.querySelector('.btn--roll').addEventListener('click', function () {

    // Regras player 1
    if (activePlayer === 0) {
        let ramdomNumDice1 = Math.trunc(Math.random() * 6) + 1; //gera numero aleatório
        valueCurrentOne.textContent = ramdomNumDice1; // Atribui valor do numero random ao valueCurrent

        switch (ramdomNumDice1) {
            case 1:
                diceImg.src = 'dice-1.png';
                alterPlayer();
                break;
            case 2:
                diceImg.src = 'dice-2.png';
                break;
            case 3:
                diceImg.src = 'dice-3.png';
                break;
            case 4:
                diceImg.src = 'dice-4.png';
                break;
            case 5:
                diceImg.src = 'dice-5.png';
                break;
            case 6:
                diceImg.src = 'dice-6.png';
                break;
            default:
                break;
        }

        
        let valueConverterOne = parseInt(scoreFirst.textContent); //Converte a string para int
        let newScoreFirst = valueConverterOne + ramdomNumDice1; //Aloca em nova var a soma 
        scoreFirst.textContent = newScoreFirst; //Define a soma dos valores

        if(newScoreFirst >= 100){
            playerOne.classList.add('player--winner');
            playerOne.classList.add('name')
            return setTimeout(restartTheGame, 2000);
        }
    }
    //Regras Player 2
    else{
        let ramdomNumDice2 = Math.trunc(Math.random() * 6) + 1; //gera numero aleatório
        valueCurrentTwo.textContent = ramdomNumDice2; // Atribui valor do numero random ao valueCurrent

        switch (ramdomNumDice2) {
            case 1:
                diceImg.src = 'dice-1.png';
                alterPlayer();
                break;
            case 2:
                diceImg.src = 'dice-2.png';
                break;
            case 3:
                diceImg.src = 'dice-3.png';
                break;
            case 4:
                diceImg.src = 'dice-4.png';
                break;
            case 5:
                diceImg.src = 'dice-5.png';
                break;
            case 6:
                diceImg.src = 'dice-6.png';
                break;
            default:
                break;
        }

        let valueCorrent2 = parseInt(scoreSecond.textContent); //Converte a string para int
        let newScoreSecond = valueCorrent2 + ramdomNumDice2; //Aloca em nova var a soma
        scoreSecond.textContent = newScoreSecond; //Define a soma dos valores

        if(newScoreSecond >= 100){
            playerTwo.classList.add('player--winner');
            playerTwo.classList.add('name')
            return setTimeout(restartTheGame, 2000);
        }
    }

})