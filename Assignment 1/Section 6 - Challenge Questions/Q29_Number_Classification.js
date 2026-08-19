
// Q29. Number Classification

// Take a number.
// Determine all applicable information:

// ● Whether it is positive, negative or zero
// ● Whether it is even or odd
// ● Whether it is greater than 100, less than 100, or equal to 100

// Example:
// Input: 150

// Output:
// Positive
// Even
// Greater than 100


// Answer 29 :


let number = -150;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

if (number > 100) {
    console.log("Greater than 100");
} else if (number < 100) {
    console.log("Less than 100");
} else {
    console.log("Equal to 100");
}