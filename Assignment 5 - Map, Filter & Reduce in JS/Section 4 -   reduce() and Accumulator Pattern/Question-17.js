
// Q17)  Calculate the Total Quantity

// Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total quantity of all items.

// Example:

// Input:

// [
//  { name: "Laptop", quantity: 1 },
//  { name: "Mouse", quantity: 2 }
// ]

// Output:

// 3


// Answer 17 :


let cartItems = [
    { name: "Laptop", quantity: 1 },
    { name: "Mouse", quantity: 2 }
];

let totalQuantity = cartItems.reduce(function(accumulator, item) {
    return accumulator + item.quantity;
}, 0);

console.log(totalQuantity);