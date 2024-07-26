// +++++++++++++++++++++++++++++ Activity 4 : Error Handling in Promises  +++++++++++++++++++++++++++++

// Task 6 : Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console

const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random < 0.5) {
    resolve("Number is less than 0.5");
  } else {
    reject("Number is greater than 0.5");
  }
});

promise
  .then((message) => console.log(message))
  .catch((error) => console.log("This is an error :", error));

// Task 7 : Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handlePromise() {
  try {
    const response = await promise;
    console.log(response);
  } catch (error) {
    console.log("This is an error :", error);
  }
}

handlePromise();
