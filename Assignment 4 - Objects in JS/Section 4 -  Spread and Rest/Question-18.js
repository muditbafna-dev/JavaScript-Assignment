
// Q18)  Rest Parameters

// Create a function named showSkills that accepts a developer's name as the first parameter and any number of skills using a rest parameter. Display the name and skills.

// Example:

// Input:

// showSkills("Rahul", "HTML", "CSS", "JavaScript");

// Output:

// Name: Rahul
// Skills: HTML, CSS, JavaScript


// Answer 18 :


function showSkills(name, ...skills) {
    console.log("Name: " + name);
    console.log("Skills: " + skills.join(", "));
}

showSkills("Rahul", "HTML", "CSS", "JavaScript");