
// Q24) ATM Transaction

// Create variables:
// balance
// withdrawAmount

// Check:
// 1. Withdrawal amount must be greater than 0.
// 2. Withdrawal amount must not be greater than the balance.
// 3. If valid, subtract the withdrawal amount.
// 4. Display the remaining balance.

// Example:
// Balance: ₹10000
// Withdraw: ₹3000
// Withdrawal successful
// Remaining balance: ₹7000



// Answer 24 :



let balance = 10000;
let withdrawAmount = 15000;

if (withdrawAmount <= 0) {
    console.log("Invalid withdrawal amount");
}
else if (withdrawAmount > balance) {
    console.log("Insufficient balance");
}
else {
    balance = balance - withdrawAmount;
    console.log("Withdrawal successful");
    console.log("Remaining balance: ₹" + balance);
}