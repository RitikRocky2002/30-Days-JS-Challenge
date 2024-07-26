// +++++++++++++++++++++++++++++ Activity 5 : Concurrent Promises +++++++++++++++++++++++++++++

// Task 8 : Use Promise.all to wait for multiple promises to resolve and then log all their values
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(42), 100));
const promise3 = fetch("https://jsonplaceholder.typicode.com/users/1");

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });

// Task 9 : Use Promise.race to log the value of the first promise that resolves amaong multiple promises.
const promise4 = new Promise((resolve) =>
  setTimeout(() => resolve("one"), 400)
);
const promise5 = new Promise((resolve) =>
  setTimeout(() => resolve("two"), 200)
);
const promise6 = new Promise((resolve, reject) =>
  setTimeout(() => reject("three"), 300)
);

Promise.race([promise4, promise5, promise6])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
