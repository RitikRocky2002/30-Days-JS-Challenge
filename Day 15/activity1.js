// +++++++++++++++++++++++++++++ Activity 1 : Understanding Closures  +++++++++++++++++++++++++++++

// Task 1 : Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
  let str = "Hello";
  return function innerFunction() {
    return str;
  };
}

console.log(outerFunction()()); // Output : Hello

// Task 2 : Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counterApp() {
  let private_counter = 0;

  function increment() {
    private_counter++;
  }

  function getCounter() {
    return private_counter;
  }
  return {
    increment,
    getCounter,
  };
}

let counter = counterApp();

console.log(counter.getCounter()); // Output : 0
counter.increment();
console.log(counter.getCounter()); // Output : 1
