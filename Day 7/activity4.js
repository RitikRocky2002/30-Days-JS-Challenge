// +++++++++++++++++++++++++++++ Activity 4 : The this keyword +++++++++++++++++++++++++++++

// Task 7 : Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method

const book = {
  title: "This is a book!",
  year: 2006,
  bookInfo: function () {
    return this.title + " " + this.year;
  },
};

console.log(book.bookInfo()); //Output : This is a book! 2006
