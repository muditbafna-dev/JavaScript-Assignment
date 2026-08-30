
// Q10)  Extract Part of an Array

// Use slice() to create a new array containing "CSS", "JavaScript", and "React".

// Example:

// Input: ["HTML", "CSS", "JavaScript", "React", "Node.js"]

// Output: ["CSS", "JavaScript", "React"]


// Answer 10 :



let languages = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
let newArray = languages.slice(1, 4);
console.log(newArray);