// Q4) Shopping Bill

// Create variables for:
// ● Product price
// ● Quantity

// Calculate the total bill.

// Then apply a discount of 10% and display:
// ● Original bill
// ● Discount amount
// ● Final bill


// Answer 4 :

let productPrice = 250;
let quantity = 4;

let originalBill = productPrice * quantity;
console.log("Original Bill =", originalBill);

let discountAmount = (originalBill * 10) / 100;
console.log("Discount Amount =", discountAmount);

let finalBill = originalBill - discountAmount;
console.log("Final Bill =", finalBill);