// import functions and grab DOM elements

// let state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state


const alienViolin = new Audio('/assets/music-choices/alien-violin.mp3');
const ambience = new Audio('/assets/music-choices/ambience.mp3');
const boat = new Audio('/assets/music-choices/boat.mp3');
const calm = new Audio('/assets/music-choices/calm.mp3');
const forestAtmo = new Audio('/assets/music-choices/forest-atmo.mp3');
const peaPoint = new Audio('/assets/music-choices/pea-point,mp3');


const musicChoicesBtn = document.getElementById('music-choices-btn');
const musicChoices = ['alienViolin, ambience, boat, calm, forestAtmo, peaPoint'];


const btnOne = document.getElementById('btn-1');
const btnTwo = document.getElementById('btn-2');
const btnThree = document.getElementById('btn-3');
const btnFour = document.getElementById('btn-4');
const btnFive = document.getElementById('btn-5');
const btnSix = document.getElementById('btn-6');


btnOne.addEventListener('click', () => {
  alienViolin.play();
});

btnTwo.addEventListener('click', () => {
  ambience.play();
});

btnThree.addEventListener('click', () => {
  boat.play();
});

btnFour.addEventListener('click', () => {
  calm.play();
});

btnFive.addEventListener('click', () => {
  forestAtmo.play();
});

btnSix.addEventListener('click', () => {
  peaPoint.play();
});