
// 15. Largest of Two Numbers

// Create a function that takes two numbers and returns the greater number.

// Answer 15 :


function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let result = findLargest(45, 78);
console.log("Largest =", result);