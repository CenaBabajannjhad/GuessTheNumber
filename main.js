let randomNumber = Math.floor(Math.random()*21);
console.log(randomNumber)
let statusToHigh = 'to high';
let statusToLow = 'to low';
let statuscorrect = 'correct'; 
let input = document.getElementById('input')
let statusContainer = document.getElementById('status');
let guessButton = document.getElementById('guess');

guessButton.addEventListener('click' , () => {
    let inputValue = Number(input.value);
    if(inputValue > randomNumber){
        statusContainer.textContent = statusToHigh;

    }else if(inputValue < randomNumber){
        statusContainer.textContent = statusToLow;

    }else if(inputValue === randomNumber){
        statusContainer.textContent = statuscorrect;
    }
})