// +++++++++++++++++++++++++++++ Activity 4 : Form Events +++++++++++++++++++++++++++++

const content = document.getElementById("content");
// Task 7 : Add a submit event listener to a form that prevents the default submission and logs the form data to the console
content.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Log form data
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
});
// Task 8 : Add a change event listener to a select dropdown that displays the selected value in a paragraph
const opt = document.getElementById("opt");
opt.addEventListener("change", (e) => {
  console.log(e.target.value);
});
