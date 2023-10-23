const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
 const random = Math.floor(Math.random() * array.length);
 return array[random];
}

// 1. RAW TEXT STRINGS
const storyText =
 'C\'était un jour :insertx: à :inserty:, et :insertz:.';
const insertX = ['un jour ensoleillé', 'un jour nuageux', 'un jour pluvieux'];
const insertY = ['dans le parc', 'à la plage', 'dans la forêt'];
const insertZ = ['ils ont décidé de jouer au football.', 'ils ont mangé de la glace.', 'ils ont fait une promenade.'];

// 2. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
 let newStory = storyText;

 let xItem = randomValueFromArray(insertX);
 let yItem = randomValueFromArray(insertY);
 let zItem = randomValueFromArray(insertZ);

 newStory = newStory.replace(':insertx:', xItem);
 newStory = newStory.replace(':inserty:', yItem);
 newStory = newStory.replace(':insertz:', zItem);

 if (customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
 }

 if (document.getElementById('uk').checked) {
    let weight = Math.round(300 / 14) + ' stone';
    let temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';

    newStory = newStory.replace('300 livres', weight);
    newStory = newStory.replace('94 degrés Fahrenheit', temperature);


