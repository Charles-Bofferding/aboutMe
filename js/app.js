/* 5 yes or no questions that can accept yes, no, y and n
have a response for each of the questions, start as Console.logs and then turn them into alerts and comment out the console logs later

ask user for their name
use that in a custom greeting
in the final message display the user's name again */

'use strict';

let userName = prompt('Why hello there, what is your name?');
console.log('Thanks for visiting ' + userName + '!');

//Question 1
let input1 = prompt('Do you know what a PCBA is? \nValid answers are: \nyes, y, no, and n');
let filtered1 = input1.toLowerCase();
//console.log(filtered1);

//In future labs with functions make this check an independent function instead of copying it 5 times for each question. It could return a boolean back with the answer and choose a default state for invalid input I guess
if(filtered1 === 'yes' || filtered1 === 'y'){
  //console.log('In my previous job I had to solder components onto PCBs for prototype builds. The tricky ones were 2mm by 4mm wide resistors that flew away if you breathed on them wrong.');
  alert('In my previous job I had to solder components onto PCBs for prototype builds. The tricky ones were 2mm by 4mm wide resistors that flew away if you breathed on them wrong.');
} else if (filtered1 === 'no' || filtered1 === 'n'){
  //console.log('It stands for \"Printed Circuit Board Assembly\", it is those green cards with all the various microchips and electrical components on them.');
  alert('It stands for \"Printed Circuit Board Assembly\", it is those green cards with all the various microchips and electrical components on them.');
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

//Question 2
let input2 = prompt('Have you ever played Deep Rock Galactic? \nValid answers are: \nyes, y, no, and n');
let filtered2 = input2.toLowerCase();
//console.log(filtered2);

//In future labs with functions make this check an independent function instead of copying it 5 times for each question. It could return a boolean back with the answer and choose a default state for invalid input I guess
if(filtered2 === 'yes' || filtered2 === 'y'){
  //console.log('Rock and Stone!\nI enjoy a good looter shooter and I love the squad element of the game');
  alert('Rock and Stone!\nI enjoy a good looter shooter and I love the squad element of the game');
} else if (filtered2 === 'no' || filtered2 === 'n'){
  //console.log('It is a first person shooter where you are a space dwarf fighting bugs which I rather enjoy');
  alert('It is a first person shooter where you are a space dwarf fighting bugs which I rather enjoy');
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

//Question 3
let input3 = prompt('Do you live in Seattle? \nValid answers are: \nyes, y, no, and n');
let filtered3 = input3.toLowerCase();
//console.log(filtered3);

//In future labs with functions make this check an independent function instead of copying it 5 times for each question. It could return a boolean back with the answer and choose a default state for invalid input I guess
if(filtered3 === 'yes' || filtered3 === 'y'){
  //console.log('That is great, I am currently living in West Seattle and the traffic from the bridge closing down is as bad as you\'ve heard');
  alert('That is great, I am currently living in West Seattle and the traffic from the bridge closing down is as bad as you\'ve heard');
} else if (filtered3 === 'no' || filtered3 === 'n'){
  //console.log('Well a Seattle hello to you. I am born and raised in Washington, a rare breed these days');
  alert('Well a Seattle hello to you. I am born and raised in Washington, a rare breed these days');
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

//Question 4
let input4 = prompt('Have you ever played D&D or a similar table top rpg? \nValid answers are: \nyes, y, no, and n');
let filtered4 = input4.toLowerCase();
//console.log(filtered4);

//In future labs with functions make this check an independent function instead of copying it 5 times for each question. It could return a boolean back with the answer and choose a default state for invalid input I guess
if(filtered4 === 'yes' || filtered4 === 'y'){
  //console.log('That\'s great, my favorite class is a druid. Who doesn\'t love turning into a literal bear to solve social problems');
  alert('That\'s great, my favorite class is a druid. Who doesn\'t love turning into a literal bear to solve social problems');
} else if (filtered4 === 'no' || filtered4 === 'n'){
  //console.log('It is worth a try sometime. It is best with funny friends!');
  alert('It is worth a try sometime. It is best with funny friends!');
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

//Question 5
let input5 = prompt('Have you ever flown a kite with more than 1 string? \nValid answers are: \nyes, y, no, and n');
let filtered5 = input5.toLowerCase();
//console.log(filtered5);

//In future labs with functions make this check an independent function instead of copying it 5 times for each question. It could return a boolean back with the answer and choose a default state for invalid input I guess
if(filtered5 === 'yes' || filtered5 === 'y'){
  //console.log('Wonderful! Kites with multiple strings give you control of the path of the kite. I have flown a kite with 4 strings, they are really cool and have two strange handles');
  alert('Wonderful! Kites with multiple strings give you control of the path of the kite. I have flown a kite with 4 strings, they are really cool and have two strange handles');
} else if (filtered5 === 'no' || filtered5 === 'n'){
  //console.log('Well hopefully you have at least flown a kite. Who doesn\'t love an excuse to get out on a sunny summer day');
  alert('Well hopefully you have at least flown a kite. Who doesn\'t love an excuse to get out on a sunny summer day');
} else {
  //console.log('Invalid answer, please refresh and try again');
  alert('Invalid answer, please refresh and try again');
}

console.log('Hope that you had a fun time and learned a bit about me ' + userName + ', \n\nBye!');