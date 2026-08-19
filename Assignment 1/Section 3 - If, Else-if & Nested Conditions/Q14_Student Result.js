
// Q14) Student Result

// Take marks of three subjects.

// A student passes only when they score 40 or more in every subject.

// If the student passes, calculate the average and display:

// Average >= 75 → Distinction
// Average >= 60 → First Division
// Average >= 50 → Second Division
// Otherwise → Pass

// If any subject is below 40:
// Result: Fail


// Answer 14 :


let js = 45;                                                              
let css = 48;
let html = 72;

if (js < 40 || css < 40 || html < 40) {
    console.log("Result: Fail");
} else {
    let total = js + css + html;
    let average = total / 3;

    if (average >= 75) {
        console.log("Result: Distinction");
    } else if (average >= 60) {
        console.log("Result: First Division");
    } else if (average >= 50) {
        console.log("Result: Second Division");
    } else {
        console.log("Result: Pass");
    }
}










