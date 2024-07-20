// +++++++++++++++++++++++++++++ Activity 5 : Enhances Object Literals +++++++++++++++++++++++++++++

// Task 8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console

let username = "ritik";
let age = 21;

const person = {
  username,
  age,
  details() {
    console.log(`Username is ${username} and age is ${age}`);
  },
};

console.log(person); //Output : { username: 'ritik', age: 21, details: [Function: details] }

// Task 9 : Create an object with computed property names based on variables and log the object to the console
let computedProperty1 = "name";
let computedProperty2 = "age";

const human = {
  [computedProperty1]: "ritik",
  [computedProperty2]: 21,
};

console.log(human); //Output : { name: 'ritik', age: 21 }
