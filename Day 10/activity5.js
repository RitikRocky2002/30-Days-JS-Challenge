// +++++++++++++++++++++++++++++ Activity 5 : Event Delegation +++++++++++++++++++++++++++++

// Task 9 : Add a click event listener to a list that logs the text content of the clicked list item using event delegation
const lists = document.getElementById("lists");
lists.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

addChild();
// Task 10 : Add an event listener to a parent element that listens for events from dynamically added child elements
lists.addEventListener(
  "click",
  (e) => {
    if (e.target.closest(".dynamic")) console.log("Dynamic child", e.target);
  },
  true
);

function addChild() {
  const newElement = document.createElement("li");
  newElement.textContent = "new list";
  newElement.classList = "dynamic";
  lists.appendChild(newElement);
}
