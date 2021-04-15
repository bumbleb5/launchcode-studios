//6) The area of a rectangle is equal to its length x width.

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.

function calculateArea(length, width = length) {
    return length * width;
}

console.log(calculateArea(5));

//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.


//Call your area function, then use a template literal to print, “The area is ____ cm^2.”
console.log(`The area is ${calculateArea(4, 6)} cm^2.`)