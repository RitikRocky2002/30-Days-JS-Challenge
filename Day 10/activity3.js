// +++++++++++++++++++++++++++++ Activity 3 : Keyboard Events +++++++++++++++++++++++++++++

const inp = document.getElementById("content");
// Task 5 : Add a keydown event listener to an input field that logs the key pressed to the console

inp.addEventListener("keydown", (e) => {
  console.log("Key pressed: " + e.key);
});

// Task 6 : Add a keyup event listener to an input field that displays the current value in a paragraph
inp.addEventListener("keyup", (e) => {
  console.log("Current value: " + e.target.value);
});
