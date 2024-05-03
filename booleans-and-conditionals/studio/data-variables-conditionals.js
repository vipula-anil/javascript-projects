// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = 100;
const weatherStatus = "clear";
const preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false;
    console.log("Astronaut count is exceeded.");
} else {
    console.log("Astronaut count is = " + astronautCount);
}
// add logic below to verify all astronauts are ready
if (astronautCount <= 7 && astronautStatus === "ready") {
    console.log("Astronauts are ready.");
} else {
    preparedForLiftOff = false;
    console.log("Astronauts are not ready.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) {
    console.log("Totalmass is good.");
} else {
    preparedForLiftOff = false;
    console.log("Totalmass exceeded.");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (maximumFuelTemp <= -150 && minimumFuelTemp >= -300 ){
    console.log("Fuel temperature is in range.");
} else {
    preparedForLiftOff = false;
    console.log("WARNING : Fuel temperature is not in range.");
}
// add logic below to verify the fuel level is at 100%
if(fuelLevel === 100) {
    console.log("Fuel is 100%");
} else {
    preparedForLiftOff = false;
    console.log(" WARNING : Fuel is not enough, need to fill");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather is good to go.");
}else {
    preparedForLiftOff = false;
    console.log("WARNING : Weather is not ok.");
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log("Launch Shuttle.");
} else {
    console.log("Shuttle not launch.");
}

console.log("--------------------------------------------------------------");
console.log("Date:"  + date);
console.log("Time:" + time);
console.log("Astronaut Count:"  + astronautCount);
console.log("Crew Mass:" + crewMassKg +"kg");
console.log("Fuel Mass:" + fuelMassKg + "kg");
console.log("Shuttle Mass:" + shuttleMassKg + "kg");
console.log("Total Mass:" + totalMassKg + "kg");
console.log("Fuel Temperature:" + fuelTempCelsius + "c");
console.log("Weather Status:" + weatherStatus);
console.log("------------------------------------------------------------------");
console.log("Have a safe trip astronauts!");