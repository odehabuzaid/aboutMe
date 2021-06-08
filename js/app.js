'use strict';
//as the visitor for his name
let visitorName = prompt('Hi , Enter your name please') ;
// greeting message
alert(`Hello ${visitorName} welcome to my humble page ,
i will ask you a quick five questions about me. Guess ( y or n / yes or no) !`);


//five questions and if answered with correctly with  yes/no | y/n  alert and (log to console in a comment)
let answer;
do
{
  answer = prompt('i am from jordan !').toLowerCase();
}while ( (answer !== 'yes' ) && (answer !== 'y') && (answer !== 'no') && (answer !== 'n') );
if ( answer === 'yes' || answer === 'y'){
  alert('thats corret i am from jordan');
  /*console.log(`visitor ${visitorName} Answerd where i am from correctly `); */
}

do
{
  answer = prompt('i like cofee more than tea !').toLowerCase();
}while ( (answer !== 'yes' ) && (answer !== 'y') && (answer !== 'no') && (answer !== 'n') );
if ( answer === 'yes' || answer === 'y'){
  alert('thats corret i like cofee more than tea');
  /*console.log(`visitor ${visitorName} Answerd what is my favorite drink correctly `); */
}

do
{
  answer = prompt('i am an organized person').toLowerCase();
}while ( (answer !== 'yes' ) && (answer !== 'y') && (answer !== 'no') && (answer !== 'n') );

if ( answer === 'yes' || answer === 'y'){
  alert('thats corret i am organized person');
  /*console.log(`visitor ${visitorName} Answerd if i am organized person or not correctly `); */
}

do
{
  answer = prompt('do i like basket ball !').toLowerCase();
}while ( (answer !== 'yes' ) && (answer !== 'y') && (answer !== 'no') && (answer !== 'n') );
if ( answer === 'no' || answer === 'n'){
  alert('thats right');
  /*console.log(`visitor ${visitorName} Answerd if i like basketball or not correctly `); */
}

do
{
  answer = prompt('do i like reading!').toLowerCase();
}while ( (answer !== 'yes' ) && (answer !== 'y') && (answer !== 'no') && (answer !== 'n') );
if ( answer === 'no' || answer === 'n'){
  alert('thats right, i cant read for more than 15 minuetes without a 15 minutes break :D ');
  /*console.log(`visitor ${visitorName} Answerd if i like reading or not correctly `); */
}

//final message
alert(`thank you alot for your time ${visitorName} check out my bio`);


