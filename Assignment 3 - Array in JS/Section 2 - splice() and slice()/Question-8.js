
// Q8) Add an Element Using splice()

// Use splice() to add "CSS" between "HTML" and "JavaScript".

// Example:

// Input: ["HTML", "JavaScript"]

// Output: ["HTML", "CSS", "JavaScript"]


// Answer 8 :


let languages = ["HTML", "JavaScript"];
languages.splice(1, 0, "CSS");
console.log(languages);
