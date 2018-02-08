'use strict';
var totalScore = 0;
var userName = prompt('Hello what is your name?');
alert('Okay ' + userName + ' here are some questions about myself');
console.log('the users name is ' + userName + '.');

var wasIMilitary = prompt('With a Y for yes or a N for no, do you think i was in the military?').toUpperCase().trim();
if (wasIMilitary === 'Y' || wasIMilitary === 'YES'){
  alert('Correct, USMC 2/1 Fox Company from 2004 till 2008');
  totalScore++;
} else if (wasIMilitary === 'N' || wasIMilitary === 'NO'){
  alert('I joined the Marines in 2004');
} else {
  alert('you didn\'t answer with a yes or no');
}
console.log('the user thinks ' + wasIMilitary + ' that I was in military');

var myFavoriteColor = prompt('Do you think I have a favorite color? yes or no').toLowerCase().trim();
if (myFavoriteColor === 'yes' || myFavoriteColor === 'y'){
  alert('Meh, I like most colors, the only color I don\'t like is Yellow.');
} else if (myFavoriteColor === 'n' || myFavoriteColor === 'no') {
  alert('Yeah you\'re right I don\'t really have a favorite color.');
  totalScore++;
} else {
  alert('Sorry that was an invalid answer.');
}
console.log('The user thinks ' + myFavoriteColor + ', that I have a favorite color');

var mySiblings = prompt('Do you think I have siblings? please answer with No or Yes').toLowerCase().trim();
if (mySiblings === 'n'|| mySiblings === 'no'){
  alert('sometimes I wish I was an only child, but I have a twin sister and an older brother.');
} else if (mySiblings === 'yes' || mySiblings === 'y'){
  alert('You\'re right i have a brother and a twin sister');
  totalScore++;
} else {
  alert('gotta answer with a yes or no.');
}
console.log('the user thinks ' + mySiblings + ' i may have siblings');

var amICreative = prompt('do you think I am very creative?').toLowerCase().trim();
if (amICreative === 'y' || amICreative === 'yes'){
  alert('Nope I get writers block on everything');
} else if (amICreative === 'n' || amICreative === 'no'){
  alert('You\'re right!');
  totalScore++;
} else {
  alert('still need a y or n for questions');
}
console.log('the user answered ' + amICreative + '. For if they think I am creative.');

var amFromSeattle = prompt('Do you think I am from Seattle?').toLowerCase().trim();
if (amFromSeattle === 'y' || amFromSeattle === 'yes'){
  alert('Kinda, i\'ve been in Seattle since I was 2 years old.');
} else if (amFromSeattle === 'n' || amFromSeattle === 'no'){
  alert('I moved up to Seattle from Stockton Ca, when I was 2 years old.');
  totalScore++;
} else {
  alert('you would have gotten a better alert if answered with y or n');
}
console.log(amFromSeattle + ' was the users imput for if they thought I was from Seattle.');


var clubPromptCount = 0;
while (clubPromptCount < 4 ) {
  var clubsManaged = parseInt(prompt('can you guess how many clubs i have managed in four tries? please enter a number'));
  console.log(clubPromptCount);
  if (clubsManaged === 5){
    alert('You\'re guess was correct, 5 clubs from Colorado to Seattle.');
    totalScore++;
    break;
  } else if (clubsManaged < 5){
    alert('gotta guess higher');
  } else{
    alert('nope gotta guess lower');
  } clubPromptCount++;
}

var countriesSeen =['australia', 'egypt', 'kuwait', 'iraq', 'thailand', 'cambodia', 'singapore', 'philippines', 'japan', 'korea', 'china', 'uae'];
var countryCount = 0;
var countryFlag = false;

while (countryFlag === false && countryCount < 6){
  var countriesGuessed = prompt('Can you guess a memerable country i\'ve been too in six tries?').toLowerCase();
  console.log(countriesGuessed);
  for (var i = 0; i < countriesSeen.length; i++){
    console.log(countriesSeen[i]);
    if (countriesGuessed === countriesSeen[i]){
      alert('yep i have been to alot, here is a few countries i\'ve seen ' + countriesSeen.join(', '));
      countryFlag = true;
      totalScore++;
    }
  } if (countryCount === 5){
    alert('Well you tried i\'ve been to ' + countriesSeen.join(', '));
  }countryCount++;
}
alert('Thanks for Playing ' + userName + ' your total score is ' + totalScore);