// +++++++++++++++++++++++++++++ Activity 1 : Basic Event Handling +++++++++++++++++++++++++++++

// Task 1 : Add a click event listener to a button that changes the text content of a paragraph
const btn = document.getElementsByTagName("button");
const cont = document.getElementsByTagName("p");
btn[0].addEventListener("click", () => {
  cont[0].textContent = "Changed!";
});

// Task 2 : Add a double-click event listener to an image that toggles its visibility
const scene = document.getElementById("scene");
scene.addEventListener("dblclick", () => {
  scene.style.display = scene.style.display === "none" ? "block" : "none";
});
