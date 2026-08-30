
// Q19) Display Elements with Their Index

// Create an array of programming languages and use forEach() to display each element along with its index.

// Example Output:

// 0 HTML
// 1 CSS
// 2 JavaScript



// Answer 19 :


let languages = ["HTML", "CSS", "JavaScript"];

languages.forEach(function(language, index) {
    console.log(index, language);
});