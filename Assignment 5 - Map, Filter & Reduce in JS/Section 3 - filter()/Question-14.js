
// Q14) Filter Gmail Addresses

// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com".

// Example:


// Input:

// ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]

// Output:

// ["rahul@gmail.com", "aman@gmail.com"]


// Answer 14 :


let emails = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];

let gmailAddresses = emails.filter(function(email) {
    return email.includes("@gmail.com");
});

console.log(gmailAddresses);