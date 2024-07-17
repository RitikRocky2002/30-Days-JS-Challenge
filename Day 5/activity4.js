// +++++++++++++++++++++++++++++ Activity 4 : Function Parameters and Default Values +++++++++++++++++++++++++++++

// Task 7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(num1, num2 = 3) {
  return num1 * num2;
}

console.log(product(4)); //Output : 12

// Task 8 : Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function product(name, age = 18) {
  return `Hello ${name}. Your age is ${age}`;
}

console.log(product("Ritik", 21)); //Output : Hello Ritik. Your age is 21
