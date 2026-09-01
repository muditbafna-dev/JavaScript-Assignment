
// Q9) Format User Names Using map()

// Create an array of names and use map() to add the text "User: " before every name. Display the new array.

// Example:

// Input:

// ["Rahul", "Priya", "Aman"]

// Output:

// ["User: Rahul", "User: Priya", "User: Aman"]



// Answer 9 :


let names = ["Rahul", "Priya", "Aman"];

let formattedNames = names.map(function(name) {
    return "User: " + name;
});

console.log(formattedNames);