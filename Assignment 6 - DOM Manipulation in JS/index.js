

// <--- Section 1 - Selecting and Modifying Elements --->

// Q1) Select an Element by ID
// Create a heading with an id of title and use getElementById() to select it and change its text.
// Example:
// HTML: <h1 id="title">Welcome</h1>
// Output: Hello JavaScript


const h2 = document.getElementById("title")
h2.textContent = "Welcome JavaScript"


// Q2) Select an Element Using querySelector()
// Create a paragraph with a class description and use querySelector() to select it and change its text
// content.
// Example:
// HTML: <p class="description">Old Text</p>
// Output: New Description


const p = document.querySelector(".description")
p.textContent = "New Description"


// Q3) Select Multiple Elements Using querySelectorAll()
// Create three <li> elements with the class item. Use querySelectorAll() to select all of them and change
// their text color using the style property.
// Example:
// HTML: <li class="item">HTML</li>
// <li class="item">CSS</li>
// <li class="item">JavaScript</li>
// Expected Result: All three list items should have the changed text color.


const list = document.querySelectorAll(".item")
list.forEach((l) => {
    l.style.color = "red"
})


// Q4) Change Content Using textContent
// Create a paragraph containing some text and use textContent to replace its content with a new message.
// Example:
// Before: <p id="message">Old Message</p>
// After: Welcome to JavaScript!


const msg = document.querySelector("#message")
msg.textContent = "Welcome to JavaScript!"


// Q5) Add HTML Using innerHTML
// Create a <div> with an id of container and use innerHTML to add a heading and a paragraph inside it.
// Example:
// Expected HTML inside the container:
// <h2>My Website</h2>
// <p>Welcome to my website!</p>


const container = document.querySelector("#container")
container.innerHTML = `<h2>My Website</h2>
<p>Welcome to my website!</p>`



// <--- Section 2 - Attributes, Classes and Styles --->

// Q6) Change an Attribute Using setAttribute()
// Create an image element and use setAttribute() to change its src and alt attributes.
// Example:
// HTML: <img id="profileImage" src="old.jpg" alt="Old Image">
// Expected Result: The image should have the new src and alt values.


const profileImage = document.querySelector("#profileImage")
profileImage.setAttribute("src", "https://avatars.githubusercontent.com/u/315279527?v=4")
profileImage.setAttribute("alt", "My GitHub Profile Picture")


// Q7) Add and Remove Classes Using classList
// Create a button and use classList.add() to add a class to it. Then use classList.remove() to remove the
// class.
// Example:
// HTML: <button id="btn">Click Me</button>
// Expected Result: The button should have the class added and then removed using JavaScript.


const btn = document.querySelector("#btn")
btn.classList.add("red")
btn.classList.remove("red")
btn.classList.toggle("red")


// Q8) Modify Element Style
// Create a heading and use the style property to change its color, fontSize, and backgroundColor.
// Example:
// HTML: <h1 id="heading">JavaScript</h1>
// Expected Result: The heading should display with the new styles applied through JavaScript.


const heading = document.querySelector("#heading")
heading.style.color = "purple"
heading.style.fontSize = "50px"
heading.style.backgroundColor = "skyblue"


// Q9) Read Data Using dataset
// Create a button with a custom data-id attribute and use the dataset property to read its value.
// Example:
// HTML: <button id="productBtn" data-id="101">View Product</button>
// Output: 101


const productBtn = document.querySelector("#productBtn")
const value = productBtn.dataset.id // reading from dataset
console.log(value);
productBtn.dataset.email = "hello@example.com" // writing in dataset



// <--- Section 3 - Creating and Adding Elements --->

// Q10) Create an Element Using createElement()
// Create a new <p> element using createElement(), add some text to it using textContent, and display it
// on the webpage.
// Example:
// Expected Output: This paragraph was created using JavaScript.


const pTag = document.createElement("p")
pTag.textContent = "This paragraph was created using JavaScript."
const body = document.querySelector("body")
body.append(pTag)


// Q11) Add an Element Using appendChild()
// Create a <ul> in HTML. Use JavaScript to create a new <li> element and add it to the list using
// appendChild().
// Example:
// HTML: <ul id="skills"></ul>
// Expected Output: HTML, CSS, JavaScript


const skills = document.querySelector("#skills")
// const li1 = document.createElement("li")
// const li2 = document.createElement("li")
// const li3 = document.createElement("li")
// li1.textContent = "HTML"
// li2.textContent = "CSS"
// li3.textContent = "JavaScript"
// // skills.appendChild(li1)
// // skills.appendChild(li2)
// // skills.appendChild(li3)
// skills.append(li1, li2, li3)

// advance 
let skillsArr = ["HTML", "CSS", "JavaScript", "React"]
skillsArr.forEach((skill) => {
    const li = document.createElement("li")
    li.textContent = skill
    li.style.color = "red"
    skills.append(li)
})


// Q12) Add Elements Using append() and prepend()
// Create a list and use append() to add an item at the end and prepend() to add an item at the beginning.
// Example:
// Before: CSS, JavaScript
// After: HTML, CSS, JavaScript, React


const skills1 = document.querySelector("#skills1");

const reactItem = document.createElement("li");
reactItem.textContent = "React";
skills1.append(reactItem);   // adds at the END

const htmlItem = document.createElement("li");
htmlItem.textContent = "HTML";
skills1.prepend(htmlItem);   // adds at the BEGINNING


// Q13) Insert an Element Using insertBefore()
// Create a list containing three items and use insertBefore() to insert a new item before the second item.
// Example:
// Before: HTML, JavaScript, React
// After: HTML, CSS, JavaScript, React


const skills2 = document.querySelector("#skills2")
const css = document.createElement("li")
css.textContent = "CSS"
skills2.insertBefore(css, skills2.children[1])



// <--- Section 4 - Removing and Cloning Elements --->

// Q14) Remove an Element
// Create a list containing three items and remove one item using either removeChild() or remove().
// Example:
// Before: HTML, CSS, JavaScript
// After: HTML, JavaScrip

const skills3 = document.querySelector("#skills3")
let skillsArr3 = ["HTML", "CSS", "JavaScript"]
skillsArr3.forEach((skill) => {
    const li = document.createElement("li")
    li.textContent = skill
    skills3.append(li)
})

skills3.children[1].remove() // Removing an Element

// Q15) Clone an Element Using cloneNode()
// Create a button and use cloneNode() to create a copy of the button. Add the cloned button to the
// webpage.
// Example:
// HTML: <button id="btn">Click Me</button>
// Expected Result: [Click Me] [Click Me]


const btn2 = btn.cloneNode(true)
body.append(btn2)