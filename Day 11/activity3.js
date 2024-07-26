// +++++++++++++++++++++++++++++ Activity 3 : Using Async/Await +++++++++++++++++++++++++++++

// Task 4 : Write an async/await function that waits for a promise to resolve and then log the resolved value
const asyncOperationOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved!");
    }, 1000);
  });
};
async function resolvePromise() {
  console.log("Async operation started...");
  const result = await asyncOperationOne();
  console.log("Result : ", result);
}

resolvePromise();
// Task 5 : Write an async/await function that handles a rejected promise using try-catch and logs the error message

async function rejectPromise() {
  try {
    const asyncOperationTwo = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Promise Rejected!");
        }, 1000);
      });
    };
    console.log("Async operation started...");
    const result = await asyncOperationTwo();
    console.log("Result : ", result);
  } catch (error) {
    console.log(error);
  }
}

rejectPromise();
