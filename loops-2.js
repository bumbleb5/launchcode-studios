//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

let str1 = 'Rutabagas';
let str2 = 'Chemistry';

let endString = '';

for (let i = 0; i < str1.length; i++) {
    endString+= str1[i].concat(str2[i]);
}

console.log(endString);

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!


