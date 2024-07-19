// +++++++++++++++++++++++++++++ Activity 3 : Nested Objects +++++++++++++++++++++++++++++

// Task 5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console

const library = {
  name: "Central Library",
  books: [
    {
      title: "Book 1",
      author: "john",
    },
    {
      title: "Book 2",
      author: "ella",
    },
    {
      title: "Book 3",
      author: "jack",
    },
  ],
};

console.log(library);

// Output :

// {
//   name: 'Central Library',
//   books: [
//     { name: 'Book 1', author: 'john' },
//     { name: 'Book 2', author: 'ella' },
//     { name: 'Book 3', author: 'jack' }
//   ]
// }

// Task 6 : Access and log the name of the library and the titles of all the books in the library

console.log(library.name); //Output : Central Library

library.books.forEach((book) => console.log(book.title));
// Output :
// Book 1
// Book 2
// Book 3
