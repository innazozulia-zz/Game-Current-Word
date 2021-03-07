window.addEventListener('load', init);

// Global

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
//to change the level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;


//DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const second = document.querySelector('#seconds');

//Words
const words = [
'time',
'year',
'people',
'way',
'day',
'man',
'thing',
'woman',
'life',
'child',
'world',
'school',
'state',
'family',
'student',
'group',
'country',
'problem',
'hand',
'part',
'place',
'case',
'week',
'company',
'system',
'program',
'question',
'work',
'government',
'number',
'night',
'point',
'home',
'water',
'room',
'mother',
'area',
'money',
'story',
'fact',
'month',
'lot',
'right',
'study',
'book',
'eye',
'job',
'word',
'business',
'issue',
'side',
'kind',
'head',
'house',
'service',
'friend',
'father',
'power',
'hour',
'game',
'line',
'end',
'member',
'law',
'car',
'city',
'community',
'name',    
'president',
'team',
'minute',
'idea',
'kid',
'body',
'information',
'back',
'parent',
'face',
'others',
'level',
'office',
'door',
'health',
'person art',
'war',
'history',
'party',
'result',
'change',
'morning',
'reason',
'research',
'girl',
'guy',
'moment',
'air',
'teacher',
'force',
'education'
];

// initialize
function init() {
    //show number if second in UI
    seconds.innerHTML = currentLevel;
    //load word from array
   showWord(words);
   //start matching on word input
   wordInput.addEventListener('input', startMatch)
   //call countdown every seconds
   setInterval(countdown, 1000);
   //check game status
   setInterval(checkStatus, 50)
}

//start match 
function startMatch(){
    if(matchWords()){
       isPlaying = true;
       time = currentLevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
    }
    // if score is -1, display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

//Match currentWord to the word input
function matchWords(){
if (wordInput.value === currentWord.innerHTML){
  message.innerHTML = "Correct!!!";
  return true;
} else {
      message.innerHTML = '';
     return false;
}

}



//pick and show random word 
function showWord(words){
    // generame random array
const randIndex = Math.floor(Math.random() * words.length);
  //output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdaown timer 
function countdown(){
    //make sure time is not run out
    if(time > 0){
        time--;
    } else if ( time === 0){
        //Game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

//check status
function checkStatus(){
    if (!isPlaying && time === 0){
        message.innerHTML = 'Game Over. Try Again!';
        message.style.color = '#ff7171';
        score = -1;
    }
}