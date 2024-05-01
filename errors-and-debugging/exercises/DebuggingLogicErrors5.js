// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 27000;
let crewStatus = true;
let computerStatus = 'green';
let crewReady = false;
//let fuelCheck = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}
console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewReady = false;
}
console.log("crewReady = ", crewReady);

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}


/*if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelCheck = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelCheck = false;
}

//console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green' && fuelCheck){
   console.log('Fuel,Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Fuel, Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);*/