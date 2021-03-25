const input = require('readline-sync');

// Declare and initialize the 12 variables here:
const date = 'Monday 2019-03-18';
const time = '10:05:34 AM';
let astronautCount = Number(input.question('How many astronauts are going on the mission? '));
const astronautStatus = 'ready';
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const fuelTempCelsius = -225;
const fuelLevel = 100;
const weatherStatus = 'clear';
let clearForTakeoff = 'YES';

const LC04Report = 
`
-------------------------------------
> LC04 - LAUNCH CHECKLIST
-------------------------------------
Date: ${date}
Time: ${time}

-------------------------------------
> ASTRONAUT INFO
-------------------------------------
* count: ${astronautCount}
* status: ${astronautStatus}

-------------------------------------
> FUEL DATA
-------------------------------------
* Fuel temp celsius: ${fuelTempCelsius} C
* Fuel level: ${fuelLevel}%

-------------------------------------
> MASS DATA
-------------------------------------
* Crew mass: ${crewMassKg} kg
* Fuel mass: ${fuelMassKg} kg
* Shuttle mass: ${shuttleMassKg} kg
* Total mass: ${totalMassKg} kg

-------------------------------------
> FLIGHT PLAN
-------------------------------------
* weather: ${weatherStatus}

-------------------------------------
> OVERALL STATUS
-------------------------------------
* Clear for takeoff: ${clearForTakeoff}
`
;

console.log(LC04Report);

// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
