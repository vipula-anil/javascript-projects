//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
console.log(word.slice(4).toUpperCase());

//Experiment with other combinations (chains) of string methods.
let language = " JavaScript world ";
console.log(language.replace('J', 'Q'));
console.log(language.slice(0,5));
console.log(language.trim());
console.log(language.indexOf('world'));
console.log(language);