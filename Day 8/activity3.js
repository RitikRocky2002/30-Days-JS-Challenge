// +++++++++++++++++++++++++++++ Activity 3 : Spread and Rest Operators +++++++++++++++++++++++++++++

// Task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console

const a = [1, 2, 3, 4, 5];
const newarr = [...a, 6, 7, 8];
console.log(newarr); //Output :
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

// Task 6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result

function add(...rest) {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  return sum;
}

console.log(add(1, 3, 4)); //Output : 8
