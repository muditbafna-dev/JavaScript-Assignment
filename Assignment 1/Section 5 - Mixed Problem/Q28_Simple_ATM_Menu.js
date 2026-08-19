
// Q28. Simple ATM Menu

// Create the following menu:
// 1. Check Balance
// 2. Deposit Money
// 3. Withdraw Money
// 4. Exit

// Use switch-case.

// Rules:
// ● Check Balance → Display current balance
// ● Deposit → Add money to balance
// ● Withdraw → Check whether sufficient balance exists
// ● Exit → Display a goodbye message
// ● Invalid choice → Display an error message


// Answer 28 :

let balance = 5000;
let choice = 3;
let amount = 1500;

console.log("1. Check Balance");
console.log("2. Deposit Money");
console.log("3. Withdraw Money");
console.log("4. Exit");

switch (choice) {
    case 1:
        console.log("Current Balance: ₹" + balance);
        break;
    case 2:
        balance = balance + amount;
        console.log("₹" + amount + " deposited successfully");
        console.log("New Balance: ₹" + balance);
        break;
    case 3:
        if (amount > balance) {
            console.log("Insufficient balance");
        } else {
            balance = balance - amount;
            console.log("₹" + amount + " withdrawn successfully");
            console.log("New Balance: ₹" + balance);
        }
        break;
    case 4:
        console.log("Thank you for banking with us. Goodbye!");
        break;
    default:
        console.log("Invalid choice");
}