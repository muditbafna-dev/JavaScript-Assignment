
// Q13) Filter Active Users

// Create an array of users containing name and isActive. Use filter() to get only the active users.

// Example:

// Input:

// [
//     { name: "Rahul", isActive: true },
//     { name: "Priya", isActive: false }
// ]

// Output:

// [
//  { name: "Rahul", isActive: true }
// ]




// Answer 13 :


let users = [
    { name: "Rahul", isActive: true },
    { name: "Priya", isActive: false }
];

let activeUsers = users.filter(function(user) {
    return user.isActive;
});

console.log(activeUsers);