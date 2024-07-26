// +++++++++++++++++++++++++++++ Activity 2 : Finally Block   +++++++++++++++++++++++++++++

// Task 3 : Write a script that includes a try-catch block and a finally block. Log messages in the try,catch and finally blocks to observe the execution flow

function executionFlow() {
  try {
    console.log("This is the try block");
    throw new Error();
  } catch (error) {
    console.log("This is the catch block");
  } finally {
    console.log("This is the finally block");
  }
}

executionFlow();
