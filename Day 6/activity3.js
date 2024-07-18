// +++++++++++++++++++++++++++++ Activity 3 : Array Methods (Intermediate) +++++++++++++++++++++++++++++

const arr = [1, 2, 3, 4, 5];

// Task 7 : Use the map method to create a new array where each number is doubled and log the new array

const mappedArr = arr.map((element) => 2 * element);
console.log(mappedArr); //Output : [ 2, 4, 6, 8, 10 ]

// Task 8 : Use the filter method to create a new array with only even numbers and log the new array

const filteredArr = arr.filter((element) => element % 2 === 0);
console.log(filteredArr); //Output : [ 2, 4]

// Task 9 : Use the reduce method to calculate the sum of all numbers in the array and log the result

const reducedArr = arr.reduce((acc, element) => acc + element, 0);
console.log(reducedArr); //Output : 15
