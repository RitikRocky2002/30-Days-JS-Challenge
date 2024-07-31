// +++++++++++++++++++++++++++++ Activity 3 : Closures in Loops  +++++++++++++++++++++++++++++

// Task 5 : Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray(n) {
  const functionArray = [];

  for (let index = 0; index < n; index++) {
    functionArray.push(function () {
      console.log("Function at index : ", index);
    });
  }
  return functionArray;
}

const arr = createFunctionArray(5);
arr.forEach((item) => item());

/* Output :
    Function at index :  0
    Function at index :  1
    Function at index :  2
    Function at index :  3
    Function at index :  4
*/
