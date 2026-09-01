
// Q16)  Count Total Products

// Create an array of product names and use reduce() with an accumulator to count the total number of products.

// Example:

// Input:

// ["Laptop", "Mouse", "Keyboard"]

// Output:

// 3



// Answer 16 :


let products = ["Laptop", "Mouse", "Keyboard"];

let totalCount = products.reduce(function(accumulator, Product) {
    return accumulator + 1;
}, 0);

console.log(totalCount);