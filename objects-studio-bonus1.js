// Code your orbitCircumference function here:
const orbitCircumference = function(r) {
    return Math.round(2 * Math.PI * r);
};
//console.log(orbitCircumference(2000));

// time = distance(km) / speed
const missionDuration = function(orbitsComplete, orbitRadius = 2000, orbitalSpeed = 28000) {
    const circumfrence = orbitCircumference(orbitRadius);
    const distanceToTravel = orbitsComplete * circumfrence;
    const time = Math.round((distanceToTravel / orbitalSpeed) * 100) / 100;
    console.log(`The mission will travel ${distanceToTravel} km around the planet, and it will take ${time} hours to complete.`);
    return time;
};
console.log(missionDuration(5));

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidateObject, orbitsComplete, orbitRadius = 2000, orbitalSpeed = 28000) {
    const totalTime = missionDuration(orbitsComplete, orbitRadius, orbitalSpeed);
    const oxygen = Math.round(candidateObject.o2Used(totalTime) * 100) / 100;
    return oxygen;
    console.log(`${candidateObject.name} will perform the spacewalk, which will last ${totalTime} hours and require ${oxygen} kg of oxygen.`);
}

// Candidate data & crew array.
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

let crew = [candidateA, candidateB, candidateC, candidateD];
//console.log(oxygenExpended(selectRandomEntry(crew), 10));

const conserveO2 = function(arr) {
    let leastUsageMember = arr[0];
    let leastO2Used = arr[0].o2Used(1);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].o2Used(1) < leastO2Used) {
            leastUsageMember = arr[i];
            leastO2Used = arr[i].o2Used(1);
        }
    }
    return leastUsageMember;
};
console.log(conserveO2(crew));