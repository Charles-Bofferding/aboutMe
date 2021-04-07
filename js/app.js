/* If you use */

'use strict';

let score = 0;
 
let questions = [
  'Has Chaz built a PCBA? \nValid answers are: \nyes, y, no, and n',
  'Is my favorite game Skyrim? \nValid answers are: \nyes, y, no, and n',
  'Do I live in Seattle? \nValid answers are: \nyes, y, no, and n',
  'I have never played a table top RPG other than D&D? \nValid answers are: \nyes, y, no, and n',
  'Have only fown kites with 1 string? \nValid answers are: \nyes, y, no, and n'
]

let yesAnswers = [
  'In my previous job I had to solder components onto PCBs for prototype builds. The tricky ones were 2mm by 4mm wide resistors that flew away if you breathed on them wrong.',
  'Incorrect, I have played a fair amount of Skyrim though don\'t get me wrong',
  'That is correct, I am currently living in West Seattle and the traffic from the bridge closing down is as bad as you\'ve heard',
  'Incorrect, I am a huge nerd and have played systems in the star wars universe, warhammer universe, and many various others',
  'Incorrect. I have flown a kite with 4 strings, they are really cool and have two strange handles'
]

let noAnswers = [
  'Incorrect, I built a lot of prototype control panel in my previous job. You never know how annoying it is to get the feel of a button push right until the customer says that it doesn\'t feel \"Clicky\" enough',
  'My favrite game is Deep Rock Galactic. It is a first person shooter where you are a space dwarf fighting bugs which I rather enjoy',
  'Incorrect, I am born and raised in Washington, a rare breed these days',
  'Correct, the fun part of these games is improv with friends and not the system itself. It is best with funny friends!',
  'Correct, there are so many fun types of kite. My favorite is a 2 line parachute kite because they are soft bodied and don\'t break if you run them into the ground'
]

let userName = prompt('Why hello there, what is your name?');
alert('Thanks for visiting ' + userName + '!');
//console.log('Thanks for visiting ' + userName + '!');


//Question 1
let input1 = prompt(questions[0]);
let filtered1 = input1.toLowerCase();
//console.log(filtered1);

if(filtered1 === 'yes' || filtered1 === 'y'){
  //console.log(yesAnswers[0]);
  alert(yesAnswers[0]);
  score++;
} else if (filtered1 === 'no' || filtered1 === 'n'){
  //console.log(noAnswers[0]);
  alert(noAnswers[0]);
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

//Question 2
let input2 = prompt(questions[1]);
let filtered2 = input2.toLowerCase();
//console.log(filtered2);

if(filtered2 === 'yes' || filtered2 === 'y'){
  //console.log(yesAnswers[1]);
  alert(yesAnswers[1]);
} else if (filtered2 === 'no' || filtered2 === 'n'){
  //console.log(noAnswers[1]);
  alert(noAnswers[1]);
  score++;
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

//Question 3
let input3 = prompt(questions[2]);
let filtered3 = input3.toLowerCase();
//console.log(filtered3);

if(filtered3 === 'yes' || filtered3 === 'y'){
  //console.log(yesAnswers[2]);
  alert(yesAnswers[2]);
  score++;
} else if (filtered3 === 'no' || filtered3 === 'n'){
  //console.log(noAnswers[2]);
  alert(noAnswers[2]);
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

//Question 4
let input4 = prompt(questions[3]);
let filtered4 = input4.toLowerCase();
//console.log(filtered4);

//In future labs with functions make this check an independent function instead of copying it 5 times for each question. It could return a boolean back with the answer and choose a default state for invalid input I guess
if(filtered4 === 'yes' || filtered4 === 'y'){
  //console.log(yesAnswers[3]);
  alert(yesAnswers[3]);
} else if (filtered4 === 'no' || filtered4 === 'n'){
  //console.log(noAnswers[3]);
  alert(noAnswers[3]);
  score++;
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

//Question 5
let input5 = prompt(questions[4]);
let filtered5 = input5.toLowerCase();
//console.log(filtered5);

//In future labs with functions make this check an independent function instead of copying it 5 times for each question. It could return a boolean back with the answer and choose a default state for invalid input I guess
if(filtered5 === 'yes' || filtered5 === 'y'){
  //console.log(yesAnswers[4]);
  alert(yesAnswers[4]);
} else if (filtered5 === 'no' || filtered5 === 'n'){
  //console.log(noAnswers[4]);
  alert(noAnswers[4]);
  score++;
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

 

//Number Guessing Game
  let correctNumber = Math.floor(Math.random() * 10) +1;
  //let correctNumber = 3;
  let guessCount = 4;
  let userGuess = 0;

  userGuess = prompt('Please enter a number from 1 to 10, you have 4 guesses');

  //Initialize i to 1 because the user starts with one guess from the prompt above
  for (let i = 1; i < guessCount; i++) {
    if (userGuess < correctNumber){
      userGuess = prompt('A little low on that guess, try something higher. Please enter a number from 1 to 10')
    } else if (userGuess > correctNumber){
      userGuess = prompt('A little high on that guess, try something lower. Please enter a number from 1 to 10')
    } else if(userGuess == correctNumber){
      alert('You got it, the number was ' + correctNumber + '!');
      score++;
      break;
    }

    if( i == guessCount - 1){
      alert('Sorry you ran out of guesses, the correct answer was ' + correctNumber);
    }

  }

//Non-Number Guessing Game

let tries = 6;
let correctChoices = ['druid','wizard','monk','barbarian','warlock'];

for (let i = 0; i < tries; i ++){

  let userChoice = prompt('Can you name one of my 5 favorite D&D classes?');
  for (let j = 0; j < correctChoices.length; j++){
    if (userChoice.toLowerCase() == correctChoices[j]){
      //win condition
      alert('You got one of them!');
      score++;
      i = tries;
      break;
    }
    //console.log('Failed check to array spot ' + j);
  }

  //missed it
  if (i < tries) {
    alert('Nope, that isn\'t on of them');
  }
  if( i == tries - 1){
    alert('Ran out of guesses. The correct answers are druid, wizard, monk, barbarian, and warlock');
  }
}

//console.log('Your score is ' + score + ' out of 7');
alert('Your overall score is ' + score + ' out of 7');

//console.log('Hope that you had a fun time and learned a bit about me ' + userName + '\n\nBye!');
alert('Hope that you had a fun time and learned a bit about me ' + userName + '\n\nBye!');
