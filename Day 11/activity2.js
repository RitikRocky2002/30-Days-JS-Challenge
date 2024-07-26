// +++++++++++++++++++++++++++++ Activity 2 : Chanining Promises +++++++++++++++++++++++++++++

// Task 3 : Create a sequence of promises that stimulate fetching data from a server. Chain the promises to log messages in a specific order

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Data Fetched!");
    resolve({ name: "Ritik", age: 21 });
  }, 2000);
})
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => console.log(error));
