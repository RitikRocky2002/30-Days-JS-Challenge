// +++++++++++++++++++++++++++++ Activity 5 : Event Handling +++++++++++++++++++++++++++++

// Task 9 : Add a click event listener to a button and changes the text content of a paragraph
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const text = document.getElementById("activity5text");
  text.textContent = "Button Clicked!";
});

// Task 10 : Add a mouseover event listener to an element that changes its border color
const activity5 = document.getElementById("activity5");
activity5.addEventListener("mouseover", () => {
  activity5.style.borderColor = "yellow";
});
