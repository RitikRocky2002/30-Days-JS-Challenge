// +++++++++++++++++++++++++++++ Feature 2 +++++++++++++++++++++++++++++

// Create a script that demonstrate the difference between the behavior between let and const when it comes to reassignment

let score = 100;
console.log(score); //Output : 100
score = 200;
console.log(score); //Output : 200

const point = 100;
console.log(point); //Output : 100
point = 200;
console.log(point); //Output : TypeError: Assignment to constant variable.

// reassignmnet in objects and arrays

// 

let obj1 = {
  name: "John",
  age: 30,
};
console.log(obj1); //Output : { name: 'John', age: 30 }

obj1 = {
  name: "Doe",
  age: 40,
};
console.log(obj1); //Output : { name: 'Doe', age: 40 }

const obj2 = {
  name: "John",
  age: 30,
};
console.log(obj2); //Output : { name: 'John', age: 30 }

obj2 = {
  name: "Doe",
  age: 40,
};
console.log(obj2); //Output : TypeError: Assignment to constant variable.

obj2.name = "Doe";
obj2.age = 40;
console.log(obj2); //Output : { name: 'Doe', age: 40 }

let arr = [1, 2, 3, 4];
console.log(arr); //Output : [ 1, 2, 3, 4 ]

arr = [1, 8, 2, 7, 9];
console.log(arr); //Output : [ 1, 8, 2, 7, 9 ]

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1); //Output : [ 1, 2, 3, 4, 5 ]

arr1 = [5, 3, 74, 36, 78];
console.log(arr1); //Output : TypeError: Assignment to constant variable.

arr1[3] = 80;
console.log(arr1); //Output : [ 1, 2, 3, 80, 5 ]
