const input = require('readline-sync');
//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let starches = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let drinks = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

const pantry = [proteins, starches, veggies, drinks, desserts];

let crewMeals = [];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

let numMeals = Number(input.question('How many meals to make? '));

while (numMeals < 1 || numMeals > 6) {
    numMeals = Number(input.question('Please enter a number between 1 and 6. How many meals to make? '));
}

for (let i = 0; i < numMeals; i++) {
    
    let protein = proteins[i];
    let starch = starches[i];
    let veg = veggies[i];
    let drink = drinks[i];
    let dessert = desserts[i];

    let meal = [protein, starch, veg, drink, dessert];
    crewMeals.push(meal);

    if (veggies[i] === 'kale') {
        console.log(`Your meal #${i + 1} is ${protein}, ${starch}, ${veg}, ${drink}, ${dessert}. Don't worry, you can have double chocolate tomorrow.`);
    } else {
        console.log(`Your meal #${i + 1} is ${protein}, ${starch}, ${veg}, ${drink}, ${dessert}.`);
    }

}

//console.log(crewMeals);

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”
