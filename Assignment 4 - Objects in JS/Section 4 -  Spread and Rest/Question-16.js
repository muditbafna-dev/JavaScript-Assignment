
// Q16)  Update an Object Using Spread

// Create a user object containing name and role. Use the spread operator to create a new object and update the role to "developer".

// Example:

// Input:

// const user = {
//  name: "Rahul",
//  role: "student"
// };

// Output:

// {
//  name: "Rahul",
//  role: "developer"
// }


// Answer 16 :


const user = {
    name: "Rahul",
    role: "student"
};

const updatedUser = { ...user, role: "developer" };

console.log(updatedUser);