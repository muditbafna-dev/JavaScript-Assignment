
// Q23) Traffic Signal

// Take a traffic signal color:
// "red"
// "yellow"
// "green"

// Use switch-case.

// Display:
// red → Stop
// yellow → Wait
// green → Go

// For any other value:

// Invalid signal



// Answer 23 : 


let signal = "green";

switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}