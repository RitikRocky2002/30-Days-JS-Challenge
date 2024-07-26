// +++++++++++++++++++++++++++++ Activity 3 : Custom Error Objects  +++++++++++++++++++++++++++++

// Task 4 : Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using try-catch block
class customError extends Error {
  constructor(message) {
    super(message);
  }
}

function division(numerator, denominator) {
  if (denominator == 0) {
    throw new customError("Dividing by Zero!");
  } else {
    return numerator / denominator;
  }
}

try {
  division(3, 0);
} catch (error) {
  if (error instanceof customError) {
    console.error(`Caught a custom error: ${error.message}`);
  } else {
    console.error(`Caught an unknown error: ${error.message}`);
  }
}

// Task 5 : Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block

function validate(input) {
  if (!input || input.trim() === "") {
    throw new customError("Input cannot be empty or whitespace only");
  } else {
    console.log("Input is valid:", input);
  }
}

try {
  validate();
} catch (error) {
  console.error(`Caught a custom error: ${error.message}`);
}
