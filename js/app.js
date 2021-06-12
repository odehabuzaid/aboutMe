'use strict';
let visitorName = prompt('Hi , Enter your name please') ;
let totalScore = 0 ;
alert(`Hello ${visitorName} welcome to my humble page ,\r\n
i will ask you a quick questions about me. \r\n Guess ( y or n / yes or no) !`);
const questions = ['i am from jordan !',
  'i like cofee more than tea !',
  'i am an organized person',
  'do i like reading!',
  'do i like basket ball !'
];
let correctAnswer = [1,1,1,0,0];
let responses = ['yes','no','y','n'];
let answer ;
for (const i of questions) {
  firstQuiz(i,correctAnswer[questions.indexOf(i)]);
}
function firstQuiz(theQuestion,theCorrectAnswer){
  do
  {
    answer = prompt(theQuestion).toLowerCase();
    if ((theCorrectAnswer === 1) && (answer ==='y' || answer === 'yes')){
      alert('thats right');
      totalScore = totalScore + 1;
    }else if ((theCorrectAnswer === 0) && (answer ==='n' || answer === 'no')){
      alert('thats right');
      totalScore = totalScore + 1;
    }else if (!(responses.indexOf(answer) === -1)) {alert('thats a Wrong answer');}
  }while (responses.indexOf(answer) === -1);
}
let guess = 30;
for (let i = 0 ; i < 4 ; i++) {
  answer = guessMyage();
  if ( answer < guess ){
    alert(`its more than what you entered ,\r\n you have ${3-i} tries left `);
  }else if ( answer > guess ){alert(`its less than what you entered ,\r\n you have ${3-i} tries left `);
  }else if ( answer === guess ){
    alert('Wow,thats Correct');
    totalScore = totalScore + 1 ;
    myIntrestsQuizz();
    break;
  }
}
function guessMyage()
{
  do
  {
    //accept the answer only when its a numeric answer , by converting the string to an integer
    answer = prompt('Guess How old i am ? Enter numbers only');
    answer = parseInt(answer);
  }while ( isNaN(answer));
  return answer;
}
function myIntrestsQuizz()
{
  const possibleCorrectAnsweres = ['sports','art','music','cars','food','technology'];
  let tries = 0;
  let pingo = false;
  do{
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
}
alert(`You scored ${totalScore} out of 7` );
alert(`thank you alot for your time ${visitorName} check out my bio`);
