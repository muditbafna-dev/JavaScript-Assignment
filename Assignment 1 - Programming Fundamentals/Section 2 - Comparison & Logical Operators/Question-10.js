
// Q10) Voting Eligibility

// Take a person’s age.

// Rules:
// Age >= 18 → Eligible to vote
// Age < 18 → Not eligible to vote



// Answer 10 :

let age = 10;

if (age >= 18 && age <= 120) {
    console.log("Eligible to vote");    
} else if (age >= 0 && age < 18) {
    console.log("Not eligible to vote");
} else {
    console.log("Invalid age entered");
}