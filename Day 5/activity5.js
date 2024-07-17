// +++++++++++++++++++++++++++++ Activity 5 : Higher Order Functions +++++++++++++++++++++++++++++

// Task 9 : Write a higher order function that takes a function and a number, and calls the function that many times

function numberCalls(fn, num) {
  for (let i = 0; i < num; i++) {
    fn();
  }
}

function show() {
  console.log("Hello");
}

numberCalls(show, 5);
/*    Output : 
            Hello
            Hello
            Hello
            Hello
            Hello  */

// Task 10 : Write a higher order function that takes a function and a value, applies the first function to the value, and then applies the second function to the result

function applyTwoFunctions(fn1, fn2, val) {
  return fn2(fn1(val));
}

function add(num) {
  return 10 + num;
}

function multiply(num) {
  return 10 * num;
}

console.log(applyTwoFunctions(add, multiply, 5)); //Output : 150
