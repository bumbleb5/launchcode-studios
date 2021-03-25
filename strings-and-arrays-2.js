let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];
console.log(strings);

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.
//console.log(strings.includes(','));

let includesComma = (element) => element.includes(',');
let includesSemicolon = (element) => element.includes(';');
let includesSpaces = (element) => element.includes(' ');
console.log(strings.some(includesComma));
console.log(strings.some(includesSemicolon));
console.log(strings.some(includesSpaces));

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

let stringComma = strings.find(includesComma); 

if (stringComma !== undefined) {
    stringComma = stringComma.split(',').reverse().join(',');
}

console.log(stringComma);


//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.

let stringSemicolon = strings.find(includesSemicolon);

if (stringSemicolon !== undefined) {
    stringSemicolon = stringSemicolon.split(';').sort().join(',');
}

console.log(stringSemicolon);

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

let stringSpace = strings.find(includesSpaces);

if (stringSpace !== undefined) {
    stringSpace = stringSpace.split(' ').sort().reverse().join(' ');
}

console.log(stringSpace);

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

let includesCommaSpaces = (element) => element.includes(', ');

let stringCommaSpaces = strings.find(includesCommaSpaces);

if (stringCommaSpaces !== undefined) {
    stringCommaSpaces = stringCommaSpaces.split(', ').reverse().join(',');
}

console.log(stringCommaSpaces);
