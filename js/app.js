'use-strict';
// ask the visitor for his name
let visitorName = prompt('Hi , Enter your name please') ;
let totalScore = 0 ;
//greeting message
alert(`Hello ${visitorName} welcome to my humble page ,\r\n
i will ask you a quick questions about me. \r\n Guess ( y or n / yes or no) !`);

// an array of five questions about me!
const questions = ['i am from jordan !',
  'i like cofee more than tea !',
  'i am an organized person',
  'do i like reading!',
  'do i like basket ball !'
];

// to compair if correct or not with the questions
let correctAnswer = [1,1,1,0,0];

//input validation array
let responses = ['yes','no','y','n'];

//visitor answer
let answer ;
for (const i of questions) {
  do
  {
    //get the user answers for every question in the array ONLY when he answers with  responses = ['yes','no','y','n'];
    answer = prompt(i.toLowerCase());
  }while ( responses.indexOf(answer) === -1);


  // Check the answer wheather its correct or not from the correctanswers array
  // If correct + 1 to score :) ;
  if ((correctAnswer[questions.indexOf(i)] ) && (answer ==='y' || answer === 'yes')){
    alert('thats right');
    totalScore = totalScore + 1;
    //console.log(`visitor ${visitorName} Answerd ${i} correctly `);
  }else if (((correctAnswer[questions.indexOf(i)] ) === 0) && (answer ==='n' || answer === 'no')){
    alert('thats right');
    totalScore = totalScore + 1;
    //console.log(`visitor ${visitorName} Answerd ${i} correctly `);
  }
}

// HTML
// order list top 10 intrests in the bottom of the page ;
// wwork experiance and education summery into an unordered list ;
// add a 6th question to the guessing game that takes only nummeric input by prompting a user to guess a number ;
// alert the user 4 times  (if the input is too high or too low for a specified number);
// score if correctly answered
// add another question (7) which there is multiple possible answers for it ;
// allow 6 tries , and exit the quiz when he answers one right .
// do not use methods and functions for the array seach.


// Quizz Question 6 , guessing a number.
let guess = 30;

//4 tries  ;
for (let i = 0 ; i < 4 ; i++) {
  do
  {
    //accept the answer only when its a numeric answer , by converting the string to an integer
    answer = prompt('Guess How old i am ? Enter numbers only');
    answer = parseInt(answer);
  }while ( isNaN(answer));
  if ( answer < guess ){
    alert(`its more than what you entered ,\r\n you have ${3-i} tries left `);
  }else if ( answer > guess ){alert(`its less than what you entered ,\r\n you have ${3-i} tries left `);
  }else if ( answer === guess ){
    alert('Wow,thats Correct');
    totalScore = totalScore + 1 ;}
}

// Quizz Question 7 , guessing an intrest.
const possibleCorrectAnsweres = ['sports','art','music','cars','food','technology'];
let tries = 0;
let pingo = false;
do{
  //get the user input and search it on the array , if exists the score +1 and pingo , break the for loop , breack the while ;
  answer = prompt(`Guess one of my intrests ,\r\n 
  | Hint sports - art - music - cars - food - technology \r\n 
  you have ${tries} tries of 6  `).toLowerCase();

  for (let i = 0; i < 6 ; i++) {
    if (answer === possibleCorrectAnsweres[i]) {
      totalScore = totalScore + 1 ;
      pingo= true;
      break;
    }
  }
  if (pingo) {break;}
  tries++;
}while( (tries < 6) );

//alert final score ,
alert(`You scored ${totalScore} out of 7` );

// quiz end
alert(`thank you alot for your time ${visitorName} check out my bio`);
