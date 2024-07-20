// +++++++++++++++++++++++++++++ Activity 4 : Default Parameters +++++++++++++++++++++++++++++

// Task 7 : Write a function that takes two parameters and return their product, with second parameter having a default value of 1. Log thr result of calling this function with and without the second parameter

function product(a, b = 1) {
  return a * b;
}

console.log(product(3)); // Output : 3
console.log(product(3, 3));  // Output : 9
