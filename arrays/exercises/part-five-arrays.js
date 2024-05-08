let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); //Divides a string into smaller pieces stored in a new array.
console.log(str.split('o'));//Divides a string starting the letter 'o'.
console.log(str.split(' '));//Divides each word with space.
console.log(str.split(''));//Divides each character.

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());//converts array to a string.
console.log(arr.join('a'));//added 'a' to each element in an array and removes the comma.
console.log(arr.join(' '));//removes comma and added space.
console.log(arr.join(''));//removes space and comma.

//3) Do split or join change the original string/array?
console.log(arr.join("+"));
console.log(str.split('a'));

//4) We can take a comma-separated string and convert it into a modifiable array. 
//Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);