
// Q1) Convert Product Names to Uppercase

// Create an array of product names and use map() to create a new array where every product name is converted to uppercase.

// Example:

// Input:

// ["laptop", "mobile", "headphones"]

// Output:

// ["LAPTOP", "MOBILE", "HEADPHONES"]


// Answer 1 :


let products = ["laptop", "mobile", "headphones"];

let upperCaseProducts = products.map(function (product) {
    return product.toUpperCase();
});

console.log(upperCaseProducts);