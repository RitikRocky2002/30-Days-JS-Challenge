// +++++++++++++++++++++++++++++ Activity 1 : Basic Error Handling with Try-Catch  +++++++++++++++++++++++++++++

// Task 1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console

function generateError() {
  const num = Math.random();

  if (num < 0.5) throw new Error("Random number is less than 0.5");
  else throw new Error("Random number is greater than 0.5");
}

function handleError() {
  try {
    generateError();
  } catch (error) {
    console.log(error.message);
  }
}

handleError();

// Task 2 : Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error

function divide(num1, num2 = 0) {
  try {
    if (num2 === 0) throw new Error("Cannot divide by zero");
    else console.log(num1 / num2);
  } catch (error) {
    console.log(error);
  }
}

divide(5, 2);
divide(5);
