
// Q10)  Display Object Entries

// Create an object containing a user's name and email. Use Object.entries() and forEach() to display each key along with its value.

// Example:

// Input:

// const user = {
//  name: "Rahul",
//  email: "rahul@example.com"
// };

// Output:

// name: Rahul
// email: rahul@example.com



// Answer 10 :


const user = {
    name: "Rahul",
    email: "rahul@example.com"
};

Object.entries(user).forEach(function(entry) {
    console.log(entry[0] + ": " + entry[1]);
});
