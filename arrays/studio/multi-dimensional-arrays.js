const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodArray = food.split(",");
let equipmentArray = equipment.split(",");
let petsArray = pets.split(",");
let sleepAidsArray = sleepAids.split(",");

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHoldArray = [];
cargoHoldArray.push(foodArray,equipmentArray,petsArray,sleepAidsArray);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

console.log(cargoHoldArray);

  let cabinetNumer = input.question("Please enter cabinet (0-3 in the cargHold");
 



//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if(cabinetNumer >= 0 && cabinetNumer <= 3 )
    {
        console.log(`The selected cabinet is ${cargoHoldArray[cabinetNumer]} `)
    }
    else
    {
        console.log(`The cabinet number you entered is ${cabinetNumer} and it should be btween 0 to 3`);
    }

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method 
//to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

cabinetNumer = input.question("Please enter cabinet (0-3 in the cargHold");
let cabinetItem = input.question("Please enter item in the cabinet");
if(cargoHoldArray[cabinetNumer].includes(cabinetItem)) {
    console.log(`Cabinet  ${cargoHoldArray[cabinetNumer]} DOES contain ${cabinetItem}.`)
} else
{
    console.log(`Cabinet ${cargoHoldArray[cabinetNumer]} DOES NOT contain ${cabinetItem}.`)
}
