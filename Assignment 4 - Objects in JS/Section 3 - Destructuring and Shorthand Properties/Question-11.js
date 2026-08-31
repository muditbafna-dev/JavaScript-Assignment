
// Q11) Object Destructuring

// Create a user object containing name, email, and role. Use object destructuring to extract name and email into separate variables.

// Example:

// Input:

// const user = {
//  name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// };

// Output:

// Rahul
// rahul@example.com


// Answer 11 :


const user = {
    name: "Rahul",
    email: "rahul@example.com",
    role: "developer"
};

const { name, email } = user;

console.log(name);
console.log(email);