// +++++++++++++++++++++++++++++ Activity 1 : Understanding Promises +++++++++++++++++++++++++++++

// Task 1 : Create a promise that resolves with a message after a 2-second timeout and log the message to the console

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
}).then((message) => {
  console.log(message);
});

// Task 2 : Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise rejected!");
  }, 2000);
}).catch((message) => {
  console.log(message);
});
