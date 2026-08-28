
// Q22) Menu-Based Calculator

// Create this menu:
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// 5. Modulus

// Take the user’s choice and two numbers.
// Use switch-case to perform the selected operation.



// Answer 22 :


let num1 = 15;
let num2 = 0;
let choice = 5;
let result;

console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Modulus");

switch (choice) {
    case 1:
        result = num1 + num2;
        console.log("Result =", result);
        break;
    case 2:
        result = num1 - num2;
        console.log("Result =", result);
        break;
    case 3:
        result = num1 * num2;
        console.log("Result =", result);
        break;
    case 4:
        if (num2 === 0) {
            console.log("Error: Division by zero");
        } else {
            result = num1 / num2;
            console.log("Result =", result);
        }
        break;
    case 5:
        if (num2 === 0) {
            console.log("Error: Division by zero");
        } else {
            result = num1 % num2;
            console.log("Result =", result);
        }
        break;
    default:
        console.log("Invalid choice");
}