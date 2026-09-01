
// Q4) Create Updated Product Prices

// Create an array of product prices. Use map() to create a new array where every price is increased by 10%. Keep the original array unchanged.

// Example:

// Input:

// [100, 200, 300]

// Output:

// Original: [100, 200, 300]
// New: [110, 220, 330]


// Answer 4 :



let originalPrices = [100, 200, 300];

let newPrices = originalPrices.map(function(price) {
    return Math.round(price * 1.10);
});

console.log("Original:", originalPrices);
console.log("New:", newPrices);
