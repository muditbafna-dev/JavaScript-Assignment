
// Q20) Simple Calculator

// Take:
// ● First number
// ● Second number
// ● Operator

// Supported operators:
// +
// -
// *
// /
// %

// Use switch-case.

// Example:
// First number: 20
// Second number: 5
// Operator: *

// Output: 100

// Also handle division by zero.


// Answer 20 :

let num1 = 20;
let num2 = 10;
let operatorSymbol = "%";

switch (operatorSymbol) {
    case "+":
        console.log("Output:", num1 + num2);
        break;

    case "-":
        console.log("Output:", num1 - num2);
        break;

    case "*":
        console.log("Output:", num1 * num2);
        break;

    case "/":
        if (num2 === 0) {
            console.log("Error: Division by zero");
        } else {
            console.log("Output:", num1 / num2);
        }
        break;

    case "%":
        if (num2 === 0) {
            console.log("Error: Division by zero");
        } else {
            console.log("Output:", num1 % num2);
        }
        break;

    default:
        console.log("Invalid operator");
}