let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? No
//Verify this by printing holdCabinet1 after using the method.
let newArray = holdCabinet1.concat(holdCabinet2);
console.log(`The concatinated array is : [${newArray}]`);
console.log(holdCabinet1);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?No
console.log(holdCabinet1.slice(1,3));
console.log(holdCabinet2.slice(2,4));
console.log(holdCabinet1);
console.log(holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? 
//reverse() revers the elements in an array and sort() arranges elements of an array in increasing order.  
//Do the methods alter the original arrays?yes
console.log(holdCabinet1.reverse());
console.log(holdCabinet2.sort());
console.log(holdCabinet1);
console.log(holdCabinet2);