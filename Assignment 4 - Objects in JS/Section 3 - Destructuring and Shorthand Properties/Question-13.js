
// Q13) Create an Object Using Shorthand Properties
// Create variables named name, email, and role. Use shorthand property syntax to create a user object using these variables.

// Example:

// Input:

// const name = "Rahul";
// const email = "rahul@example.com";
// const role = "developer";

// Output:

// {
//  name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// }



// Answer 13 :

const name = "Rahul";
const email = "rahul@example.com";
const role = "developer";

const user = {
    name,
    email,
    role
};

console.log(user);