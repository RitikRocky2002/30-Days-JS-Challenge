// +++++++++++++++++++++++++++++ Activity 5 : Understanding const +++++++++++++++++++++++++++++

// Task 6 : Try reassigning a variable declared with const and observe the error.

const PI = 3.1415; // Assigning a value to the variable
console.log(PI);

PI = 3.142; // Reassigning a value to the variable
console.log(PI); //TypeError: Assignment to constant variable.
