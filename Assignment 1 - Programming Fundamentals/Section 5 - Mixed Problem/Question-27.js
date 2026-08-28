
// Q27) Electricity Bill + Discount

// Take the electricity units consumed.

// Calculate the bill using:
// 0–100 → ₹5/unit
// 101–200 → ₹7/unit
// Above 200 → ₹10/unit

// Then apply:
// Bill >= ₹2000 → 10% discount
// Otherwise → No discount

// Display:
// Units
// Original Bill
// Discount
// Final Bill



// Answer 27 :


let units = 350;
let originalBill;

if (units <= 100) {
    originalBill = units * 5;
} else if (units <= 200) {
    originalBill = (100 * 5) + (units - 100) * 7;
} else {
    originalBill = (100 * 5) + (100 * 7) + (units - 200) * 10;
}

let discount;
let finalBill;

if (originalBill >= 2000) {
    discount = originalBill * 0.10;
} else {
    discount = 0;
}

finalBill = originalBill - discount;

console.log("Units:", units);
console.log("Original Bill: ₹" + originalBill);
console.log("Discount: ₹" + discount);
console.log("Final Bill: ₹" + finalBill);