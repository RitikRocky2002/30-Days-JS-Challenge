// +++++++++++++++++++++++++++++ Activity 2 : Nested If-Else Statements +++++++++++++++++++++++++++++

// Task 3 : Write a program to find the largest of three numbers using nested if-else statements
let a = 100,
  b = 30,
  c = 70;
  
if (a > b) {
  if (a > c) {
    console.log("a is greatest");
  } else {
    console.log("c is greatest");
  }
} else {
  if (b > c) {
    console.log("b is greatest");
  } else {
    console.log("c is greatest");
  }
}

// Output : a is greatest
