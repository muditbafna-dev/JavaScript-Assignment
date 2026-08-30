
// // Q17) Flatten a Multi-Level Array

// Use flat() with an appropriate depth to flatten the following array completely.

// Example:

// Input: [1, [2, [3, 4]]]
// Output: [1, 2, 3, 4]



// Answer 17 :


let nestedArray = [1, [2, [3, 4]]];
let flatArray = nestedArray.flat(2);
console.log(flatArray);