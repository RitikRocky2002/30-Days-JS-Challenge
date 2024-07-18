// +++++++++++++++++++++++++++++ Activity 4 : Array Iteration +++++++++++++++++++++++++++++

const arr = [1, 2, 3, 4, 5];

// Task 10 : Use a for loop to iterate over the array and log each element to the console

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}
/*
    Output :
            1
            2
            3
            4
            5
*/

// Task 11 : Use the forEach method to iterate over the array and log each element to the console

arr.forEach((element) => {
  console.log(element);
});

/*
    Output :
            1
            2
            3
            4
            5
*/