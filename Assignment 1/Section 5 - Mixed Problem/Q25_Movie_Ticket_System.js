
// Q25) Movie Ticket System

// Take:
// age
// numberOfTickets

// Ticket prices:
// Age below 12 → ₹100
// Age 12–59 → ₹200
// Age 60+ → ₹120

// Calculate the total ticket price.

// Example:
// Age: 25
// Tickets: 3
// Total: ₹600



// Answer 25 :


let age = 25;
let numberOfTickets = 3;
let pricePerTicket;

if (age < 12) {
    pricePerTicket = 100;
} else if (age <= 59) {
    pricePerTicket = 200;
} else {
    pricePerTicket = 120;
}

let totalPrice = pricePerTicket * numberOfTickets;

console.log("Age:", age);
console.log("Tickets:", numberOfTickets);
console.log("Total: ₹" + totalPrice);