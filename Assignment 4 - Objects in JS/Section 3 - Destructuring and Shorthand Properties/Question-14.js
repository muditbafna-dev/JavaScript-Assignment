
// Q14) Destructure Function Parameters

// Create a function named displayUser that receives a user object. Use object destructuring in the function parameters to access and display name and email.

// Example:

// Input:

// displayUser({
//  name: "Rahul",
//  email: "rahul@example.com"
// });

// Output:

// Rahul
// rahul@example.com


// Answer 14 :


function displayUser({ name, email }) {
    console.log(name);
    console.log(email);
}

displayUser({
    name: "Rahul",
    email: "rahul@example.com"
});