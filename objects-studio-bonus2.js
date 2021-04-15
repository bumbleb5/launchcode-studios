// need 9.5kg of fuel / 1kg mass
// Code your crewMass function here:
const totalCrewMass = (crewArr) => {
    let totalMass = 0;
    for (let i = 0; i < crewArr.length; i++) {
        totalMass+= crewArr[i].mass;
    }
    return Math.round(totalMass * 10) / 10;
};

// Code your fuelRequired function here:
const fuelRequired = (crewArr) => {
    const rocketMass = 75000;
    let crewMass = 0;
    for (let i = 0; i < crewArr.length; i++) {
        if (crewArr[i].species === 'cat' || crewArr[i].species === 'dog') {
            crewMass+= crewArr[i].mass + 200;
        } else {
            crewMass+= crewArr[i].mass + 100;
        }
    }
    const totalMass = rocketMass + crewMass;
    return Math.ceil(9.5 * totalMass);
};

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateB,candidateD,candidateF];

const launchMass = totalCrewMass(crew) + 75000;
const launchFuel = fuelRequired(crew);

console.log(`The mission has a launch mass of ${launchMass} kg and requires ${launchFuel} kg of fuel.`);