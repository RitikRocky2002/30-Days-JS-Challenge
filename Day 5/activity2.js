// +++++++++++++++++++++++++++++ Activity 2 : Function Expression +++++++++++++++++++++++++++++

// Task 3 : Write a function expression to find the maximum of two numbers and log the result to the console

const max = function (num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
};

console.log(max(2, 3)); //Output : 3

// Task 4 : Write a function expression to concatenate two strings and return the result

const concat = function (str1, str2) {
  return str1 + str2;
};
console.log(concat("Hello", "World")); //Output : HelloWorld