// +++++++++++++++++++++++++++++ Activity 4 : Modifying Attributes and Classes +++++++++++++++++++++++++++++

// Task 7 : Select an HTML element and change one of its attributs (e.g.. src of an img tag)
const image = document.getElementsByTagName("img");
image[0].setAttribute(
  "src",
  "https://images.pexels.com/photos/15378172/pexels-photo-15378172/free-photo-of-landmark-81-skyscraper-towering-over-buildings-in-saigon-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
);

// Task 8 : Add and remove a CSS class to/ from an HTML element
const ptext = document.getElementsByClassName("ptext");
ptext[0].classList.add("danger");
