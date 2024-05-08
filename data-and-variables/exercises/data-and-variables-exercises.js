// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
/*let determination;
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKilometer = 0.621

console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilometer);

let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars = milesToMars/shuttleSpeed;
let daysToMars = hoursToMars/24;
console.log("Determination will take " + daysToMars + "  days to reach Mars!")

let milesToMoon = distanceToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon/shuttleSpeed;
let daysToMoon = hoursToMoon/24;
console.log("Determination will take "+ daysToMoon + " days to reach Moon");*/

console.log(Boolean ("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));

console.log(0 == true);

let billHasBeenPaid = false;

if(!billHasBeenPaid){
    console.log("Ypur bill is due soon");
}

let a = 7;

if(a % 2 === 1) {
    console.log("Launch");
} else if(a > 5) {
    console.log("Code");
} else {
    console.log("LaunchCode");
} 

let num = 7;

if (num % 2 === 0) {
    if (num % 2 === 1) {
    console.log("ODD");
    }

   // if (num > 0) {
        //console.log("POSITIVE");
    //}
}



let engineIndicatorLight = "redblinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCdode = 200;
let shuttleSpeed = 15000;

/*if (engineIndicatorLight === "green") {
    console.log("engines have started");
} else if (engineIndicatorLight === "green blinking"){
    console.log("engines are prepairing to start");
} else {
    console.log("engines are off");
}*/

/*if (crewStatus) {
    console.log("Crew Ready"); 
} else ("Crew Not Ready");

if (computerStatusCdode === 200) {
    console.log("Please Stand By. Computer Is Rebooting");
} else if (computerStatusCdode === 400){
    console.log("Success! Computer Online.");
} else {
    console.log("Alert: Computer Offline.");
}

if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
    console.log("ALERT: cannot maintain orbit! ");
} else {
    console.log("Stable speed");
}*/



if (crewStatus && computerStatusCdode === 200 && spaceSuitsOn) {
    console.log("all systems go");
} else {
    console.log("WARNING: Not ready.");
}

if (!crewStatus || computerStatusCdode !== 200 || !spaceSuitsOn) {
    console.log("WARNING: Not ready.");
} else {
    console.log("All systems go.");
}
/*

if (crewStatus = true) {
    console.log("Crew Ready.");
} else {
    console.log("Crew Not Ready.");
}

if (computerStatusCdode === 200) {
    console.log("Please stand by. Computer is rebooting");
} else if (computerStatusCdode === 400) {
    console.log("Success! Computer online.");
} else {
    console.log("ALERT: Computer offline.");
}


//let day = Wednesday;

//console.log(day);

//let name = "Julie";

//console.log("Hello", name);


let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
    console.log('Fuel level cleared.');
    launchReady = true;
} else {
    console.log('WARNING:Insufficient fuel!');
    launchReady = false;
}*/