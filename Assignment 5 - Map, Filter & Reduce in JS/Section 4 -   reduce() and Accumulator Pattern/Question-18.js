
// Q18) Calculate Total Order Amount

// Create an array of order objects containing amount.Use reduce() to calculate the total order amount.

// Example:

// Input:

// [
//  { amount: 500 },
//  { amount: 1000 },
//  { amount: 750 }
// ]

// Output:

// 2250

// Answer 18 :



let orders = [
    { amount: 500 },
    { amount: 1000 },
    { amount: 750 }
];

let totalAmount = orders.reduce(function(accumulator, order) {
    return accumulator + order.amount;
}, 0);

console.log(totalAmount);