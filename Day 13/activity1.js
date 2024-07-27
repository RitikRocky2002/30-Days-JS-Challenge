// +++++++++++++++++++++++++++++ Activity 1 : Creating and Exporting Modules  +++++++++++++++++++++++++++++

// Task 1 : Create a module that exports a function to add to numbers. Import and use this module in another script.

export function add(num1, num2) {
  return num1 + num2;
}

// Task 2 : Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

export const person = {
  name: "John Doe",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
