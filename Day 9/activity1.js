// +++++++++++++++++++++++++++++ Activity 1 : Selecting and Manipulating Elements +++++++++++++++++++++++++++++

// Task 1 : Select an HTML element by its id and change its text content
const heading = document.getElementById("heading");
heading.textContent = "Heading Changed";

// Task 2 : Select an HTML element by its class and change its background color
const paratext = document.getElementsByClassName("paratext");
paratext[0].style.backgroundColor = "yellow";
