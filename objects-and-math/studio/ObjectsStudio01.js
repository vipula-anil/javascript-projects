// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}


// Code your buildCrewArray function here:


let idNumbers = [291, 414, 503, 599, 796, 890];
console.log(selectRandomEntry(idNumbers));

let selectRandomEntry2 = [];

for (let i =0; i < idNumbers.length; i++) {

  selectRandomEntry2.push(selectRandomEntry(idNumbers));
  //while(idNumbers.length >0)

}
let selectedRandomarray = [];

for (let i =0; i < selectRandomEntry2.length; i++) {
  if (!selectedRandomarray.includes(selectRandomEntry2[i])) {
    selectedRandomarray.push(selectRandomEntry2[i]);
  }
}
console.log("The unique random array is :", selectedRandomarray.slice(0,3));
let selectedRandomArray2 = selectedRandomarray.slice(0,3);
console.log(selectedRandomArray2);
console.log(selectRandomEntry2);

let missionCrew = [];
function crewArray(randomSelectedID, candidateObjects){
  for (let i = 0; i < randomSelectedID.length; i++){
    for (let j = 0; j < candidateObjects.length; j++) {
     if (candidateObjects[j].astronautID === randomSelectedID[i]){
      missionCrew.push(candidateObjects[j]);
     }

    }
  }
  return missionCrew;
}


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

let crewAnimals = crewArray(selectRandomEntry2,animals);
// Code your template literal and console.log statements:
console.log(`${crewAnimals[0].name}, ${crewAnimals[1].name}, and ${crewAnimals[2].name} are going to space!`);