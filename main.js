
let input = document.getElementById('input')
let statusContainer = document.getElementById('status');
let startButton = document.getElementById('start');
let buttonsContainer = document.getElementById('button-parents');
let guessButton = document.createElement('button');
let againButton = document.getElementById('again');


// arrow function => get user input value
const userInputValue = () => Number(input.value);
// arrow function => reset input
const resetInputValue = () => input.value = '';
// arrow function => generate new random number
const randomNumberGenerator = () => Math.floor(Math.random()*21);
let randomNumber = randomNumberGenerator();


// when start button clicked
startButton.addEventListener('click' , startTheGame)
// call this function
function startTheGame() {
    // remove input readonly attribute
    input.removeAttribute('readonly')
    // append new button and remove start button
    startButton.remove()
    guessButton.textContent = 'Guess';
    guessButton.classList.add('guess-button');
    guessButton.id = 'guess-button';
    buttonsContainer.appendChild(guessButton);
    // change game status text
    statusContainer.textContent = 'guess the number';
    // add event listener on guessButton
    guessButton.addEventListener('click' , checkGuess)
}

function checkGuess(){
    // get user value
    let userValue = userInputValue();

    // check userValue
    if(userValue){
        if(userValue > randomNumber){
            statusContainer.textContent = 'to high ⬆️';
            resetInputValue();

        }else if(userValue < randomNumber){
            statusContainer.textContent = 'to low ⬇️';
            resetInputValue();

        }else if(userValue === randomNumber){
            document.getElementById('body').classList.add('correct')
            statusContainer.textContent = 'currect answer 🤞' 
            againButton.classList.remove('none') 
        }  
    }else{
        alert('you must enter somthing...')
    }
}

// addeventlistener on again button
againButton.addEventListener('click' , resetGame)
// when clicked reset the game
function resetGame(){
    againButton.classList.add('none');
    resetInputValue(); 
    randomNumber = randomNumberGenerator();
    console.log(randomNumber)
    statusContainer.textContent = 'guess the new number...'
    document.getElementById('body').classList.remove('correct')
}

