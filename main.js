// random number generator
let randomNumber = Math.floor(Math.random()*21);
// input , statusPlace , button
const input = document.getElementById('input')
const statusContainer = document.getElementById('status');
const startButton = document.getElementById('guess');
// game status
const gameStatus = {
    statusToHigh : 'to high',
    statusToLow : 'to low' ,
    statuscorrect : 'correct'
}
