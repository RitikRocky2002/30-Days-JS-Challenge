// +++++++++++++++++++++++++++++ Activity 2 : Mouse Events +++++++++++++++++++++++++++++

const el = document.getElementById("content");
// Task 3 : Add a mouseover event listener to an element that changes its background color
el.addEventListener("mouseover", () => {
  el.style.backgroundColor = "cyan";
});
// Task 4 : Add a mouseout event listener to an element that resets its background color
el.addEventListener("mouseout", () => {
  el.style.backgroundColor = "white";
});
