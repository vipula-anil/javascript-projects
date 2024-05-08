//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table =[];
table.push(element1,element2,element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
 console.log(table[1], table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2],table[1][0],table[2][1]);


//5) 'table' is an example of a 2-dimensional array. 
//The first “level” contains the element arrays, and the second level holds the name/symbol/mass values.
// Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let table1 = [];
let element11 = [];
let element21 = [];

table1.push(element11,element21);

let ele1 = [5,7,8];
let ele2 =[8,3,9];
let ele3 =[9,3,1];

element11.push(ele1,ele2,ele3);

let ele11 = [6,4,6];
let ele21 =[0,8,3];
let ele31 =[9,3,5];

element21.push(ele11,ele21,ele31);

console.log(table1[0],table1[0][0],table1[0][0][0]);