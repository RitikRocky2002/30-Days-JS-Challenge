// +++++++++++++++++++++++++++++ Activity 3 : Arrow Functions +++++++++++++++++++++++++++++

// Task 5 : Write an arrow function to calculate the sum of two numbers and return the result

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(1, 4)); //Output : 5

// Task 6 : Write an arrow function to check if a string contains a specific character and return a boolean value

const checkCharacter = (str, char) => {
  return str.includes(char);
};

console.log(checkCharacter("Hello World!", "!")); // Output: true
