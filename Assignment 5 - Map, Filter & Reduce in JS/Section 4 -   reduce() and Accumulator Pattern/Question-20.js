
// Q20) Calculate Final Cart Total

// Create an array of cart items containing name, price, and quantity. Use reduce() to calculate the final cart total by multiplying the price and quantity of each item.

// Example

// Input:

// [
//  { name: "Mouse", price: 500, quantity: 2 },
//  { name: "Keyboard", price: 1000, quantity: 1 }
// ]

// Output:

// 2000


// Answer 20 :



let cartItems = [
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 }
];

let cartTotal = cartItems.reduce(function(accumulator, item) {
    return accumulator + (item.price * item.quantity);
}, 0);

console.log(cartTotal);