
// Q8) Create a New Array Using map()

// Using the same array of frontend technologies, use map() to create a new array where every technology is converted to uppercase.

// Example:

// Input:

// ["html", "css", "javascript"]

// Output:

// ["HTML", "CSS", "JAVASCRIPT"]



// Answer 8 :


let technologies = ["html", "css", "javascript"];

let upperTechnologies = technologies.map(function(tech) {
    return tech.toUpperCase();
});

console.log(upperTechnologies);