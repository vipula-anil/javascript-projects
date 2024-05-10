const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let strModified= str.slice(3,str.length+1).concat(str.slice(0,3));

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The origianl string is ${str} and the modified string is ${strModified}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let word= input.question("Please enter a word :");
let numOfLetters =input.question("Please enter number of letters to relocate:  ");


//3) Add validation to your code to deal with user inputs that are longer than 
//the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if(numOfLetters > word.length)
{
        console.log(`The number of letters entered ${numOfLetters}  should be less than or equal to word length ${word.length}`)
        numOfLetters = 3;
} 
let wordModified= word.slice(numOfLetters,word.length+1).concat(word.slice(0,numOfLetters));
console.log(`The origianl string is ${word} and the modified string is ${wordModified}`);