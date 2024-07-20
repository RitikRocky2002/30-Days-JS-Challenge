// +++++++++++++++++++++++++++++ Activity 2 : Destructuring +++++++++++++++++++++++++++++

// Task 3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console

const a = [1, 2, 3, 4, 5];
const [first, second] = a;
console.log(first, second); //Output : 1 2

// Task 4 : Use object destructuring to extract the title and author from a book object and log them to the console

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
}

const { title, author } = book;

console.log(title, author); //Output : The Great Gatsby F. Scott Fitzgerald