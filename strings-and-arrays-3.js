let input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();
equipment = equipment.split(',').sort();
pets = pets.split(',').sort();
sleepAids = sleepAids.split(',').sort();

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids);
console.table(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinetNumber = input.question('Please select a cabinet from 0 - 3. ');
let itemToFind = input.question('What are we looking for in here? ');

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetNumber > 3 || cabinetNumber < 0) {
    console.log(`Whoops! ${cabinetNumber} isn't valid. Please try a number 0 - 3.`);
} else {
    console.log(`Your cabinet number ${cabinetNumber} contains ${cargoHold[cabinetNumber]}.`);
}

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

if (cargoHold[cabinetNumber].includes(itemToFind)) {
    console.log(`Cabinet number ${cabinetNumber} does contain ${itemToFind}!`);
} else {
    console.log(`Cabinet number ${cabinetNumber} does not contain ${itemToFind}.`);
}
