//Global Constants
const clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const patternLength = 8;
const numTiles = 4;
const totalTimeInMin = 10;


//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0;  //must be between 0.0 and 1.0
var guessCounter = 0;
var strikes;
var timeLeftSecs;
var timeLeftMin;
var intervalID;


function startGame(){
    progress = 0;
    strikes = 0;
    gamePlaying = true;
    timeLeftSecs = 60000 * totalTimeInMin;
    displayTime(10, 0);
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    getPattern();
    playClueSequence();
    startTimer();
}

function getPattern(){
  for(var i = 0; i < patternLength; i++){
    pattern[i] = Math.floor(Math.random() * (numTiles) + 1); //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
}

function printPattern(){
  for(var i = 0; i < patternLength; i++){
    console.log(i + "th tile is " + pattern[i]);
  }
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    stopTimer();
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

//source timer  https://www.w3schools.com/js/js_timing.asp
function startTimer(){
  intervalID = setInterval(timer, 1000);
}

function stopTimer(){
  clearInterval(intervalID);
}

function timer() {
    timeLeftSecs = timeLeftSecs - 1000;
    timeLeftMin = Math.floor(timeLeftSecs / 60000);
    displayTime(timeLeftMin, timeLeftSecs);
}

function displayTime(min, sec){
  sec = Math.floor((sec % (min * 60000)) / 1000);
  if (sec == 0){
    document.getElementById("timerDisplay").innerHTML = min + ":00";
  } else if(sec < 10){
    document.getElementById("timerDisplay").innerHTML = min + ":0" + sec;
  }else {
    document.getElementById("timerDisplay").innerHTML = min + ":" + sec;
  } 
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(message){
  stopGame();
  alert(message);
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn != pattern[guessCounter]){
    if (strikes < 2) {
      strikes++;
      alert("Try again!");
      console.log("Strikes: " + strikes);
    } else {
      loseGame("Game Over. You lost.");
    }
  } else if(guessCounter < progress){
      guessCounter++;      
  } else if(progress == pattern.length - 1){
      winGame(); 
  } else {
    progress++;
    playClueSequence();
  }
  return;
}
