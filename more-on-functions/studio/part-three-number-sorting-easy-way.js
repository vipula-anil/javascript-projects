//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
nums1 = [40, 100, 1, 5, 25, 10];
nums1.sort(function(a, b) {
return a - b;
});
console.log(nums1);

//Sort each array in decending order.
nums1 = [5, 10, 2, 42];
//nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
nums1.sort(function(a, b) {
return b - a;
});
console.log(nums1);