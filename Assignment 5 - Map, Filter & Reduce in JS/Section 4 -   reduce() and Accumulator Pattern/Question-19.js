// Q19) Create a Comma-Separated String

// Create an array of frontend technologies and use reduce() to combine them into a single comma-separated string.

// Example:

// Input:

// ["HTML", "CSS", "JavaScript"]

// Output:

// "HTML, CSS, JavaScript"


// Answer 19 :


let technologies = ["HTML", "CSS", "JavaScript"];

let techString = technologies.reduce(function(accumulator, tech, index) {
    if (index === 0) {
        return tech;
    } else {
        return accumulator + ", " + tech;
    }
}, "");

console.log(techString);