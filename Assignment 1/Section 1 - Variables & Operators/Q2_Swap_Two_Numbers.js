// Q2) Swap Two Numbers

// Create two variables:
// a = 10
// b = 20

// Swap their values using a third variable.

// Expected output:

// Before swapping:
// a = 10
// b = 20

// After swapping:
// a = 20
// b = 10



// Answer 2:

let a = 10;
let b = 20;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

let temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);