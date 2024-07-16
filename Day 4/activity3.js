// +++++++++++++++++++++++++++++ Activity 3 : For Loop +++++++++++++++++++++++++++++

// Task 5 : Write a program to print numbers from 1 to 5 using a do...while loop

let index = 1;
do {
  console.log(index);
  index++;
} while (index < 6);

// Task 6 : Write a program to calculate the factorial of a number using do...while loop

let num = 5;
let fact = 1;
do {
  fact *= num;
  num--;
} while (num > 0);

console.log(fact);
