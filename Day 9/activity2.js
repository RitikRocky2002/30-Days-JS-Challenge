// +++++++++++++++++++++++++++++ Activity 2 : Creating and Appending Elements +++++++++++++++++++++++++++++

// Task 3 : Create a new div element with some text content and append it to the body

const newElement = document.createElement("div");
newElement.textContent = "Created a new div";
document.body.appendChild(newElement);

// Task 4 : Create a new li element and add it to existing ul list
const newli = document.createElement("li");
newli.textContent = "Created a new list";
const ul = document.getElementById("ul");
ul.appendChild(newli);
