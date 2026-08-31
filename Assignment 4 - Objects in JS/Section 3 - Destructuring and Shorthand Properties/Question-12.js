
// Q12) Destructuring with Renaming

// Create a product object containing name and price. Use destructuring to store the name property in a variable named productName.

// Example:

// Input:

// const product = {
//  name: "Laptop",
//  price: 50000
// };

// Expected Result:

// productName = Laptop


// Answer 12 :


const product = {
    name: "Laptop",
    price: 50000
};

const { name: productName } = product;

console.log(productName);