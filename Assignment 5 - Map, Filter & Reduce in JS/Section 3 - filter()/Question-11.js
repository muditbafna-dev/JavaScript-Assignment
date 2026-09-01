
// Q11) Filter Users by Role

// Create an array of user objects containing name and role. Use filter() to get all users whose role is "developer".

// Example:

// Input:

// [
//  { name: "Rahul", role: "developer" },
//  { name: "Priya", role: "student" }
// ]

// Output:

// [
//  { name: "Rahul", role: "developer" }
// ]


// Answer 11 :


let users = [
    { name: "Rahul", role: "developer" },
    { name: "Priya", role: "student" }
];

let developers = users.filter(function(user) {
    return user.role === "developer";
});

console.log(developers);