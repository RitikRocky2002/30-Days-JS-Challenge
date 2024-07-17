// +++++++++++++++++++++++++++++ Activity 1 : Function Declaration +++++++++++++++++++++++++++++

// Task 1 : Write a function to check if a number is even or odd and log the result to the console

function isEvenOrOdd(number) {
  if (number % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

isEvenOrOdd(5); //Output : The number is odd

// Task 2 : Write a function to calculate the square of a number and return the result

function square(number) {
  return number * number;
} 

console.log(square(5)); //Output : 25
