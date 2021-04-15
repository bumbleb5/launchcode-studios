function selectRandomEntry(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

let idNumbers = [291, 414, 503, 599, 796, 890];

function selectThreeCrewMembers (arr) {
    let crewArray = [];
    while (crewArray.length < 3) {
        let crewMemberID = selectRandomEntry(arr);
        while (crewArray.includes(crewMemberID)) {
            crewMemberID = selectRandomEntry(arr);
        }
        crewArray.push(crewMemberID);
    }
    return crewArray;
}

const candidateIDArray = selectThreeCrewMembers(idNumbers);

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

function buildCrewArray(candidateIDArray, animals) {
    let crewArray = [];
    for (let i = 0; i < animals.length; i++) {
        if (candidateIDArray.includes(animals[i]['astronautID'])) {
            crewArray.push(animals[i]);
        }
    }
    return crewArray;
}

let builtCrewArray = buildCrewArray(candidateIDArray, animals);

// Code your template literal and console.log statements:
console.log(`${builtCrewArray[0]['name']}, ${builtCrewArray[1]['name']}, and ${builtCrewArray[2]['name']} are going to space!`);