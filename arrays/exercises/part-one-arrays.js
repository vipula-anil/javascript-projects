//Create an array called practiceFile with the following entry: 273.15
let practiceFile = [273.15];

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  
//Print the array after each step to confirm the changes.
practiceFile[1] = "42";
//console.log(practiceFile.push("42"));
console.log(practiceFile);
//console.log(practiceFile.push("hello"));
practiceFile[2] = "hello";
console.log(practiceFile);

//Use a single .push() to add the following items: false, -4.6, and "87".  Print the array to confirm the changes.
console.log(practiceFile.push('false',-4.6,'87'));
console.log(practiceFile);