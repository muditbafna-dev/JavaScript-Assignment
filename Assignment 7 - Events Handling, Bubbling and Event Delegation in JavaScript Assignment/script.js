

// <--- Section 1 - Event Handling Basics --->

// Q1) Handle a Button Click
// Create a button and use addEventListener() to display a message when the button is clicked.
// Example:
// HTML:
// <button id="btn">Click Me</button>
// Output:
// Button Clicked!


const btn = document.querySelector("#btn")
const removeBtn = document.querySelector("#remove-btn")
const btnTxt = document.querySelector("#btn-txt")

const addText = () => {
    console.log("Button Clicked!");
    btnTxt.textContent = "Button Clicked!"
}
btn.addEventListener("click", addText)

removeBtn.addEventListener("click", () => {
    btnTxt.textContent = ""
})


// Q2) Change Text on Click
// Create a paragraph and a button. Use addEventListener() to change the paragraph text when the button
// is clicked.
// Example:
// Before:
// Welcome to my website!
// After clicking the button:
// Thanks for visiting!


const changeTextBtn = document.querySelector("#change-text-btn")
const changeText = document.querySelector("#change-text")

changeTextBtn.addEventListener("click", () => {
    if (changeText.textContent === "Welcome to my website!") {
        changeText.textContent = "Thanks for visiting!"
        return
    }
    changeText.textContent = "Welcome to my website!"
})


// Q3) Handle a Mouseover Event
// Create a heading and use addEventListener() with the mouseover event to change its text when the
// mouse moves over it.
// Example:
// Before:
// JavaScript
// After mouseover:
// Mouse is over the heading!


const intro = document.querySelector("#intro")
intro.addEventListener("mouseover", () => {
    intro.textContent = "Hello Mera naam Mudit hai"
    intro.style.backgroundColor = "yellow"
    // console.log(e.target.tagName);
})

intro.addEventListener("mouseleave", () => {
    intro.textContent = "Hii My Name is Mudit"
    intro.style.backgroundColor = "white"
})



// <--- Section 2 - Event Object --->

// Q4) Display the Clicked Element
// Create a button and use the event object to identify the element that was clicked.
// Example:
// HTML:
// <button id="btn">Click Me</button>
// Output:
// BUTTON

const btn1 = document.querySelector("#btn1")
const btnTxt1 = document.querySelector("#btn-txt1")
btn1.addEventListener("click", (e) => {
    console.log(e.target.tagName);
    btnTxt1.textContent = e.target.tagName
})


// Q5) Display Mouse Coordinates
// Create a <div> and use a mousemove event to display the mouse coordinates using the event object's
// clientX and clientY properties.
// Example Output:
// X: 250
// Y: 180


const btn2 = document.querySelector("#btn2")
const btnTxt2 = document.querySelector("#btn-txt2")

btn2.addEventListener("mousemove", (e) => {
    btnTxt2.textContent = `X: ${e.clientX}, Y: ${e.clientY}`
})


// Q6) Get the Value of an Input Using the Event Object
// Create an input field and use the event object's target.value to display the entered value.
// Example:
// Input:
// JavaScript
// Output:
// You typed: JavaScript


const inpt = document.querySelector("#inpt")
const inptTxt = document.querySelector("#inpt-txt")

// inpt.addEventListener("focus", (e) => {
//     const value = e.target.value;
//     console.log(value); 
// })

// inpt.addEventListener("blur", (e) => {
//     const value = e.target.value;
//     console.log(value);
// })

inpt.addEventListener("input", (e) => {
    const value = e.target.value;
    console.log(value);
    inptTxt.textContent = `You typed: ${e.target.value}`
})



// <--- Section 3 - Removing and Controlling Events --->

// Q7) Remove an Event Listener
// Create a button and attach a click event using addEventListener(). Create a separate function and use
// removeEventListener() to stop the click event when required.
// Example:
// Before removing the listener:
// Button clicked!
// After removing the listener:
// Clicking the button should no longer display the message.


const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btnTxt3 = document.querySelector("#btn-txt3")

function showMessage() {
    btnTxt3.textContent = "Button clicked!"
}
btn3.addEventListener("click", showMessage)

btn4.addEventListener("click", () => {
    btn3.removeEventListener("click", showMessage)
    btnTxt3.textContent = ""
})

// removeBtn.addEventListener("click", () => {
//     btnTxt.textContent = ""
//     btn.removeEventListener("click", addText)
// })  


// Q8) Run an Event Only Once
// Create a button and use addEventListener() with the once option so that the event runs only the first
// time the button is clicked.
// Example:
// First click:
// Welcome!
// Second click:
// No message should be displayed.


// btn.addEventListener("click", addText , {once : true})

const btn5 = document.querySelector("#btn5")
const btnTxt5 = document.querySelector("#btn-txt5")

btn5.addEventListener("click", () => {
    btnTxt5.textContent = "Welcome!"
    console.log("Welcome!");
}, { once: true })


// Q9) Stop Event Propagation
// Create a parent <div> containing a button. Add click events to both parent and button. Use
// stopPropagation() so that clicking the button does not trigger the parent's click event.
// Example:
// Without stopPropagation():
// Button clicked
// Parent clicked
// With stopPropagation():
// Button clicked


document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("parent clicked");
})

document.querySelector("#button").addEventListener("click", (e) => {
    e.stopPropagation() // this stops the event bubbling
    console.log("button clicked");
})



// <--- Section 4 - Bubbling, Capturing & Default Actions --->

// Q10) Demonstrate Event Bubbling
// Create a parent <div> containing a child <button>. Add click events to both elements and observe the
// order in which the events execute when the button is clicked.
// Example:
// HTML Structure:
// <div id="parent1">
//  <button id="child1">Click Me</button>
// </div>
// Expected Output:
// Button clicked
// Parent clicked


document.querySelector("#parent1").addEventListener("click", () => {
    console.log("Parent clicked");
})

document.querySelector("#child1").addEventListener("click", () => {
    console.log("Button clicked");
})


// Q11) Demonstrate Event Capturing
// Create a parent <div> containing a button. Add click event listeners to both using the capturing phase and observe the order in which the events execute.
// Example:
// Expected Output:
// Parent clicked
// Button clicked


// dont use  { capture: true }
// document.querySelector("#parent2").addEventListener("click", (e) => {
//     e.stopPropagation() // this stops the event bubbling
//     console.log("parent clicked");
// }, { capture: true })

document.querySelector("#parent2").addEventListener("click", () => {
    console.log("parent clicked");
}, true)

document.querySelector("#button2").addEventListener("click", () => {
    console.log("button clicked");
}, true)


// <--- Section 5 - Event Delegation --->

// Q12) Handle Multiple Buttons Using Event Delegation
// Create multiple buttons inside a parent <div>. Add only one event listener to the parent and use event
// delegation to identify which button was clicked.
// Example:
// HTML:
// <div id="buttons">
//  <button>HTML</button>
//  <button>CSS</button>
//  <button>JavaScript</button>
// </div>
// When JavaScript button is clicked:
// JavaScript button clicked


const buttons = document.querySelector("#buttons")
const buttonsTxt = document.querySelector("#buttons-txt")

buttons.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log(`${e.target.textContent} button clicked`);
        buttonsTxt.textContent = `${e.target.textContent} button clicked`
    }
})

// document.querySelector("#buttons").addEventListener("click" , (e) => {
//     if(e.target.id === "buttons"){
//         return
//     }
//     // console.log({target : e.target});
//     // console.log({currentTarget : e.currentTarget});
//     console.log(e.target.textContent);
// })


// Q13) Handle a Dynamic List Using Event Delegation
// Create a list of items and add one event listener to the <ul>. Use event delegation to display the text of
// the clicked list item.
// Example:
// HTML:
// <ul id="skills">
//  <li>HTML</li>
//  <li>CSS</li>
//  <li>JavaScript</li>
// </ul>
// When CSS is clicked:
// You clicked: CSS


const skills = document.querySelector("#skills")
const skillsTxt = document.querySelector("#skills-txt")

skills.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(`You clicked: ${e.target.textContent}`);
        skillsTxt.textContent = `You clicked: ${e.target.textContent}`
    }
})

