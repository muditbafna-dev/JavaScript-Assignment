
// 19. Sum from 1 to N

// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n.

// Example:
// Input: 5
// Output: 15

// Answer 19 :

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <=n; i++) {
        sum = sum + i;
    }
    return sum;
}

let result = sumNumbers(5);
console.log("Sum =", result);