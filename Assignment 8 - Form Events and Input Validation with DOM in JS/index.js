// <--- Section 1 - Form and Input Events --->

// Q1) Handle Form Submit Event
// Create a simple form with a name input and submit button. Use the submit event to display a message when the form is submitted.
// Example:
// Input:
// Name: Rahul
// Output:
// Form submitted successfully!


const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    console.log("Form submitted successfully!");
})

// Q2) Prevent Form Submission
// Create a form with a submit button and use preventDefault() inside the submit event to stop the page from refreshing.
// Example:
// Expected Result:
// When the user clicks Submit, the form should not reload the page.


form.addEventListener("submit", (e) => {
    e.preventDefault() // Q2: stops the page from refreshing
})


// Q3) Display Input Using the input Event
// Create an input field and use the input event to display the value entered by the user in a paragraph.
// Example:
// Input:
// JavaScript
// Output:
// You entered: JavaScript

// const inputName = document.querySelector("#name")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const value = inputName.value
//     console.log(value);
// })
const inputName = document.querySelector("#name")

inputName.addEventListener("input", (e) => {
    console.log(`You entered: ${e.target.value}`);
})

// Q4) Detect Changes Using the change Event
// Create a <select> dropdown containing three programming languages. Use the change event to display the selected language.
// Example:
// Options:
// HTML
// CSS
// JavaScript
// When JavaScript is selected:
// Selected Language: JavaScript


const skillList = document.querySelector("#skills")

skillList.addEventListener("change", (e) => {
    if (e.target.value) {
        // console.log(e.target.value);
        console.log(`Selected Language: ${e.target.value}`);
    }
})


// Q5) Handle the focus Event
// Create an input field and use the focus event to change its border or background color when the user clicks inside it.
// Example:
// Before Focus:
// Normal input style
// After Focus:
// Input border changes

inputName.addEventListener("focus", (e) => {
    inputName.style.outlineColor = "red"
})


// Q6) Handle the blur Event
// Create an input field and use the blur event to display a message when the user moves away from the input field.
// Example:
// After leaving the input:
// You left the input field.


inputName.addEventListener("blur", (e) => {
    console.log("You left the input field.");
})


// <--- Section 2 - Basic Form Validation --->

// Q7) Validate a Required Name Field
// Create a form with a name input. When the form is submitted, check whether the name field is empty.
// Display an error message if it is empty.
// Example:
// Input:
// Name:
// Output:
// Name is required.

// Q8) Validate Email Field
// Create a form with an email input and check whether the email field is empty during form submission.
// Display an appropriate message if no email is entered.
// Example:
// Input:
// Email:
// Output:
// Email is required.

// Q9) Validate Password Length
// Create a password field and validate that the password contains at least 6 characters.
// Example:
// Input:
// Password: abc
// Output:
// Password must be at least 6 characters.

// Q10) Validate Multiple Form Fields
// Create a form containing name, email, and password fields. On submission, check whether any of the fields are empty and display an appropriate error message.
// Example:
// Input:
// Name: Rahul
// Email:
// Password: 123456
// Output:
// Email is required.

// Solution of q7, q8, q9 and q10 in one


const inputEmail = document.querySelector("#email")
const inputPasswordValue = document.querySelector("#password")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nameValue = inputName.value
    const email = inputEmail.value
    const password = inputPasswordValue.value

    if (!nameValue) {
        console.log("Name Field is required.");
        return
    }
    if (!email) {
        console.log("Email Field is required.");
        return
    }
    if (!password) {
        console.log("Password Field is required.");
        return
    }
    if (password.length < 6) {
        console.log("Password must be at least 6 characters.");
        return
    }

    console.log({ name: nameValue, email, password });
})