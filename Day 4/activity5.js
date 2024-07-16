// +++++++++++++++++++++++++++++ Activity 5 : Loop Control Statements +++++++++++++++++++++++++++++

// Task 8 : Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement
for (let index = 1; index <= 10; index++) {
  if (index === 5) continue;
  console.log(index);
}

// Task 9 : Write a program to print numbers from 1 to 10, but stop when the number is 7 using the break statement

for (let index = 1; index <= 10; index++) {
  if (index === 7) break;
  console.log(index);
}
