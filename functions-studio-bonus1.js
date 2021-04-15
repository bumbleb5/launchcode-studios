/* 4) Define a function with one parameter, which will be a string. The function must do the following:
a) Have a clear, descriptive name.
b) Retrieve only the last character from strings with lengths of 3 or less.
c) Retrieve only the first 3 characters from strings with lengths larger than 3. 
d) Use a template literal to return the phrase, "We put the '___' in '___'." Fill the first blank with the modified string, and fill the second blank
with the original string.
*/

function stringExtractor(str) {
    let string = '';
    if (str.length <= 3) {
        string = str.slice(str.length - 1);
    } else {
        string = str.slice(0, 3);
    }
    return `We put the ${string} in ${str}.`;
}

console.log(stringExtractor('dog'));

str = 'Functions Rock';

console.log(stringExtractor(str));

/* Now test your function:
e) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
*/
