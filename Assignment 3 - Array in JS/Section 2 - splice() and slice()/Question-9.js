
// Q9) Replace an Array Element

// Use splice() to replace "Java" with "JavaScript".

// Example:

// Input: ["HTML", "CSS", "Java"]

// Output: ["HTML", "CSS", "JavaScript"]


// Answer 9 :


let languages = ["HTML", "CSS", "Java"];
languages.splice(2, 1, "JavaScript");
console.log(languages);