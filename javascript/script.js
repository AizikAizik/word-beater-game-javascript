// window.addEventListener('load', (e) =>{
//     if(score === 0){
//         message.style.display = 'none';
//     }
// })

// window.removeEventListener('load')
window.addEventListener('load', init)

// Available levels
const levels = {
    easy: 5,
    medium : 4,
    hard: 3
}

// choose level of playing
const currentLevel = levels.easy;

//Global Variables
let time  = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements from the webpage
const wordInput = document.querySelector('#word-input');
const currentWord =  document.querySelector('#current-word');
const scoreDisplay =  document.querySelector('#score');
const timeDisplay =  document.querySelector('#time');
const message =  document.querySelector('#message');
const seconds =  document.querySelector('#seconds');

// Words from the array list that shuffles
const words = [
    'siblings',
    'matchet',
    'headset',
    'anthem',
    'constantly',
    'statue',
    'cocktail',
    'stubborn',
    'dictionary',
    'developer',
    'javascript',
    'laptop',
    'serious',
    'establishment',
    'symptom',
    'definition',
    'daemon',
    'manchester',
    'definition',
    'nutrition',
    'investigate',
    'chelsea',
    'barcelona',
    'mysterious',
    'evening',
    'whatsapp',
    'revolver',
    'horrendous',
    'liverpool',
    'tottenham',
    'sheffield'
];

//Initialize the Game
function init() {
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //load the word array into the game
    showWord(words)

    wordInput.addEventListener('input', startMatch)

    //Call countdown function every second
    setInterval(countdown, 1000);

    //Check Game status
    setInterval(checkStatus, 50)
}

//pick and show random word
function showWord(words) {
    //Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);

    //Output random word into the web page
    currentWord.innerHTML = words[randIndex];
}

function countdown() {
    //first make sure timer hasn't run out
    if(time > 0){
        // decrement the time
        time--;
    }else if(time === 0){
        //Game is over
        isPlaying = false;
    }
    // Show the current time
    timeDisplay.innerHTML = time;
}

//Check Game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!'
        score = -1;
    }

    if(message.innerHTML === 'Game Over!!!'){
        message.style.color = 'red'   
    }else{
        if(score === 0){
            message.style.color = 'yellow'
            message.innerHTML = 'Game is Reset'
        }else{
            message.style.color = 'green'; 
        }
    }
}

//match current words to the word input
function matchWords() {
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!'
        return true;
    } else{
        message.innerHTML = "";
        return false;
    }
}

function startMatch() {
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //show the current score
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
}