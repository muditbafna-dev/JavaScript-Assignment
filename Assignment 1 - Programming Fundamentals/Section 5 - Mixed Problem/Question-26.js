
// Q26) Restaurant Menu

// Create the following menu:
// 1. Burger → ₹150
// 2. Pizza → ₹250
// 3. Pasta → ₹180
// 4. Sandwich → ₹120

// Take the customer’s choice and quantity.
// Use switch-case to calculate the total price.

// Example:
// Choice: 2
// Quantity: 3
// Total: ₹750


// Answer 26 :


let choice = 4;
let quantity = 14;
let pricePerItem;

switch (choice) {
    case 1:
        pricePerItem = 150;
        console.log("Burger selected");
        console.log("Quantity:", quantity);        
        break;
    case 2:
        pricePerItem = 250;
        console.log("Pizza selected");
        console.log("Quantity:", quantity);
        break;
    case 3:
        pricePerItem = 180;
        console.log("Pasta selected");
        console.log("Quantity:", quantity);
        break;
    case 4:
        pricePerItem = 120;
        console.log("Sandwich selected");
        console.log("Quantity:", quantity);
        break;
    default:
        console.log("Invalid choice");
}

if (choice >= 1 && choice <= 4) {
   console.log("Total: ₹" + pricePerItem * quantity);
}
