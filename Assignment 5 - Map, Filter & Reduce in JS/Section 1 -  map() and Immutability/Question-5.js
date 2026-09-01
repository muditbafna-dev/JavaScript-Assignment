
// Q5) Update Object Data Immutably

// Create an array of user objects with name and role. Use map() and the spread operator to create a new array where the role of every user is changed to "developer" without modifying the original array.

// Example:

// Input:

// [
//  { name: "Rahul", role: "student" },
//  { name: "Priya", role: "student" }
// ]

// Output:

// [
//  { name: "Rahul", role: "developer" },
//  { name: "Priya", role: "developer" }
// ]


// Answer 5 :


let users = [
    { name: "Rahul", role: "student" },
    { name: "Priya", role: "student" }
];

let updatedUsers = users.map(function(user) {
    return { ...user, role: "developer" };
});

console.log(updatedUsers);