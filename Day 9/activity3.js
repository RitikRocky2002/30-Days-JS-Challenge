// +++++++++++++++++++++++++++++ Activity 3 : Removing Elements +++++++++++++++++++++++++++++

// Task 5 : Select an HTML element and remove it from the DOM
const removeElement = document.getElementById("deleteheading");
removeElement.remove();

// Task 6 : Remove the last child of a specific HTML element

const list = document.getElementById("list");
list.removeChild(list.lastChild);
