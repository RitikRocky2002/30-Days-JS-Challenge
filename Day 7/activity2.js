// +++++++++++++++++++++++++++++ Activity 2 : Object Methods +++++++++++++++++++++++++++++

// Task 3 : Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method

const book = {
  title: "Cracking Placement",
  author: "Ritik Shekhar Parida",
  year: 2002,
  log: function () {
    return book.title + " " + book.author;
  },
  updateYear: function (year) {
    this.year = year;
  },
};

console.log(book.log()); //Output : Cracking Placement Ritik Shekhar Parida

// Task 4 : Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object

book.updateYear(2003);
console.log(book);

// Output :
// {
//   title: 'Cracking Placement',
//   author: 'Ritik Shekhar Parida',
//   year: 2003,
//   log: [Function: log],
//   updateYear: [Function: updateYear]
// }
