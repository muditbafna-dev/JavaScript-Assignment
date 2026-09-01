
// Q15)   Calculate the Total Cart Price

// Create an array of product prices and use reduce() to calculate the total price of all items in the cart.

// Example:

// Input:

// [500, 1200, 300]

// Output:

// 2000



// Answer 15 :


let prices = [500, 1200, 300];

let totalPrice = prices.reduce(function(accumulator, price) {
    return accumulator + price;
}, 0);

console.log(totalPrice);