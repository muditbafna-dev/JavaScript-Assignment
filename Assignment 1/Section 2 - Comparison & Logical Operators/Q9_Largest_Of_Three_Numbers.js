
// Q9) Largest of Three Numbers

// Take three numbers and find the largest number using if-else.

// Do not use arrays or any built-in maximum function.


// Answer 9 :

let num1 = 23;
let num2 = 67;
let num3 = 45;

if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest");
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest");
} else {
    console.log(num3 + " is the largest");
}