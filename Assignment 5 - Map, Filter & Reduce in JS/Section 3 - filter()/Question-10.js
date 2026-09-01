
// Q10)  Filter Available Products

// Create an array of product objects containing name and inStock. Use filter() to create a new array containing only the products that are in stock.

// Example:

// Input:

// [
//  { name: "Laptop", inStock: true },
//  { name: "Mouse", inStock: false }
// ]

// Output:

// [
//  { name: "Laptop", inStock: true }
// ]



// Answer 10 :


let products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
];

let availableProducts = products.filter(function(product) {
    return product.inStock === true;
});

console.log(availableProducts);