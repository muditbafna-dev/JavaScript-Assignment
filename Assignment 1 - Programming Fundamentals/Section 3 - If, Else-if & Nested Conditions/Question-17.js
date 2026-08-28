
// Q17) Salary Bonus

// Take an employee’s:
// ● Salary
// ● Years of experience

// Bonus rules:
// Experience >= 10 years → 20% bonus
// Experience >= 5 years → 10% bonus
// Experience >= 2 years → 5% bonus
// Below 2 years → No bonus

// Calculate and display:
// ● Original salary
// ● Bonus
// ● Final salary



// Answer 17 :


let salary = 50000;
let experience = 12;
let bonus;

if (experience >= 10) {
    bonus = salary * 0.20;
} else if (experience >= 5) {
    bonus = salary * 0.10;
} else if (experience >= 2) {
    bonus = salary * 0.05;
} else {
    bonus = 0;
}

let finalSalary = salary + bonus;

console.log("Original Salary = ₹" + salary);
console.log("Bonus = ₹" + bonus);
console.log("Final Salary = ₹" + finalSalary);