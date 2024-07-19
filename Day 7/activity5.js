// +++++++++++++++++++++++++++++ Activity 5 : Object Iteration +++++++++++++++++++++++++++++

// Task 8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value
const book = {
  title: "Cracking Placement",
  author: "Ritik Shekhar Parida",
  year: 2002,
};

for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}

// Output :
// title : Cracking Placement
// author : Ritik Shekhar Parida
// year : 2002

// Task 9 : Use Object.keys and Object.values methods to log all the keys and values of the book object

console.log(Object.keys(book)); // Output : [ 'title', 'author', 'year' ]
console.log(Object.values(book)); // Output : [ 'Cracking Placement', 'Ritik Shekhar Parida', 2002 ]
 