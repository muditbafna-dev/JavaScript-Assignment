
// 18. Multiplication Table Function

// Create a function printTable(num) that prints the multiplication table of the given number.

// Answer 18 :

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

printTable(7);