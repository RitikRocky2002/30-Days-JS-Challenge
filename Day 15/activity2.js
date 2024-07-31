// +++++++++++++++++++++++++++++ Activity 2 : Practical Closures  +++++++++++++++++++++++++++++

// Task 3 : Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateId() {
  let lastId = 0;

  function createId() {
    lastId++;
    return lastId;
  }

  return createId;
}

const Id = generateId();

console.log(Id()); // Output : 1
console.log(Id()); // Output : 2
console.log(Id()); // Output : 3

// Task 4 : Create a closure that captures a user's name and returns a function that greets the user by name.

function greet() {
  function wish(username) {
    return `Hello, ${username}`;
  }
  return wish;
}

console.log(greet()("Ritik")); // Output : Hello, Ritik
