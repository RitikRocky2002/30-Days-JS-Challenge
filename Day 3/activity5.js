// +++++++++++++++++++++++++++++ Activity 5 : Combining Conditions +++++++++++++++++++++++++++++

// Task 7 : Write a program to check if a year is a leap year using multiple conditions(divisible by 4,but not 100 unless also divisible by 100)
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  console.log("Leap year");
else console.log("Not a leap year");

// Output : Leap year