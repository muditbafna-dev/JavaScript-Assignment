
// Q13) Student Grade

// Take a student’s percentage.

// Assign a grade:
// 90-100 --> A
// 80-89 --> B
// 70-79 --> C
// 60-69 --> D
// 40-59 --> E
// Below 40 --> F

// Also check for invalid percentages below 0 or above 100.



// Answer 13 :


let marks = 39;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
}
else if (marks >= 80 && marks <= 89) {
    console.log("Grade B");
}
else if (marks >= 70 && marks <= 79) {
    console.log("Grade C");
}
else if (marks >= 60 && marks <= 69) {
    console.log("Grade D");
}
else if (marks >= 40 && marks <= 59) {
    console.log("Grade E");
}
else if (marks >= 0 && marks <= 39) {
    console.log("Grade F");
}
else {
    console.log("Invalid Marks");
}