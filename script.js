let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1 || guess>100){
        alert('Please enter a number within the range');
    }
    else{
        prevGuess.push(guess);
        if(numOfGuess === 5){
            displayGuess(guess);
            displayMessage(`GAME OVER!!!!. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('Congrtass! You guessed it right!!!');
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage('Number is low ;<');
    }
    else if(guess>randomNumber){
        displayMessage('Number is Highh ;<');
    }
}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numOfGuess++;
    remaining.innerHTML = `${6-numOfGuess}`;
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game <h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${6 - numOfGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;
    });
}
