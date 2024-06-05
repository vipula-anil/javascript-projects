let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};


let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let beagleOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {return Math.floor(Math.random()*11)},
   
};


// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
chimpTwo["astronautID"] = 3;
beagleOne["astronautID"] = 4;
tardOne["astronautID"] = 5;

let crew = [superChimpOne, salamander, chimpTwo, beagleOne, tardOne];
  
function crewReports(animal) {
   
   return (`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
}


for(let i=0;i<crew.length;i++)
   {
      const report = crewReports(crew[i]);
      console.log(report);
   }

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
let results = fitnessTest(crew);
for (let index = 0; index < results.length; index++) {
   
   console.log(results[index]);
}

// Start an animal race!
function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }


  