window.addEventListener('load', init);

// Globals

//Available levels

const levels = {
  easy : 5,
  medium : 3,
  hard : 1
}

// change levels

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM variables
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'joke',
  'delivery',
  'manticore',
  'apex',
  'secondary',
  'elephant',
  'apricot',
  'anaconda',
  'armchair',
  'hypocrisy',
  'database',
  'narcissism',
  'schizophrenia',
  'avant-garde',
  'onomatopoeia',
  'otorhinolaryngology',
  'germany',
  'scientology',
  'horoscope',
  'oberon',
  'facade'
];

// initialize game

function init(){
  // show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // load word from array
  showWord(words);
  // start matching wordInput
  wordInput.addEventListener('input', startMatch);
  //call countdown every second
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 50);
}

// startMatch
function startMatch(){
  if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  //if score is -1 -> display 0
  if(score === -1){
    scoreDisplay.innerHTML = 0;
  }else{
    scoreDisplay.innerHTML = score;
  }
}

// match current word to wordInput
function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct';
    return true;
  }else{
    message.innerHTML = '';
    return false;
  }
}

//pick and show random word
function showWord(words){
  //generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown(){
  //make sure time is not run out
  if(time > 0){
    //decrease time
    time--;
  }else if(time === 0){
    //game over
    isPlaying = false;
  }

  //show time
  timeDisplay.innerHTML = time;
}


// check game status
function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game Over';
    score = -1;
  }
}
