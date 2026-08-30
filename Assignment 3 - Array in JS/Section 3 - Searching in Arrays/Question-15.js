
// Q15)  Find an Index Using findIndex()

// Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya".

// Example:

// [
//  { name: "Rahul", age: 20 },
//  { name: "Priya", age: 22 }
// ]


// Answer 15 :


let users = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 22 }
];

let index = users.findIndex(function(user) {
    return user.name === "Priya";
});

console.log(index);