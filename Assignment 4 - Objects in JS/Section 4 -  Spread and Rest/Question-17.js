
// // Q17)  Combine Two Arrays Using Spread

// Create one array containing frontend technologies and another containing backend technologies. Use the spread operator to combine them into a single array.

// Example:

// Input:

// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express"];

// Output:

// ["HTML", "CSS", "JavaScript", "Node.js", "Express"]


// Answer 17 :


const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

const fullStack = [...frontend, ...backend];

console.log(fullStack);