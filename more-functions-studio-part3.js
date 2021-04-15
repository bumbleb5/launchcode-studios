//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

function sortAscending(a, b) {
    //console.log('a: ' + a + ' b: ' + b);
    //console.log(`${a} - ${b} = ${a - b}`);
    return a - b;
}

console.log(nums1.sort(sortAscending));

//Sort each array in decending order.
function sortDescending(a, b) {
    //console.log('a: ' + a + 'b: ' + b);
    //console.log(`${a} - ${b} = ${a - b}`);
    return b - a;
}

console.log(nums2.sort(sortDescending));
console.log(nums3.sort(sortAscending));
console.log(nums3.sort(sortDescending));
console.log(nums1);