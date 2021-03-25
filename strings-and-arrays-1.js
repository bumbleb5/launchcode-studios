const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let str1 = str.toLowerCase().slice(0, 3);
let str2 = str.toLowerCase().slice(3, str.length - 1);
str2 = str2.concat(str1);

console.log(str2);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} in Pig Latin reads ${str2}. \n`);


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let userPhrase = input.question('Please enter a word to convert to Pig Latin. ');
let numberToRemove = input.question('How many letters to remove? ');

let numberTooLong;
if (userPhrase.length < numberToRemove) {
    numberTooLong = 'bigger than your phrase was long';
    numberToRemove = 3;
} else {
    numberTooLong = 'good';
} 

let splitPhrase = userPhrase.toLowerCase().split('');
splitPhrase.push(splitPhrase.splice(0, numberToRemove).join(''));
pigLatinPhrase = splitPhrase.join('');

console.log(`Your phrase is ${userPhrase}. 
Your number to remove was ${numberTooLong} so we will remove ${numberToRemove} letters. 
Your phrase in Pig Latin is ${pigLatinPhrase}.`);
