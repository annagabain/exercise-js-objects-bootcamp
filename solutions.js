const users = require("./users");
// my tests to connect the users and solutions files
// console.log(users)
// users.forEach( user => {console.log(user.name.first)})

// ---------------------------------------------------------------------------------------------

console.log("Excercise: Bibblan");

// 1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är `title`, `author`, `numPages`.
let book = {
  title: "Alice in Wonderland",
  author: "Lewis Carroll",
  numPages: 200,
};
console.log('\n\ntask 1\n\n', book);
// 2. Skapa en array av objekt med flera stycken böcker
let books = [
  {
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    numPages: 200,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    numPages: 320,
  },
  {
    title: "1984",
    author: "George Orwell",
    numPages: 328,
  },
];


console.log('\n\ntask 2\n\n', books);

// 3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars `null`.
// Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.

function searchBookByTitle(booksArray, searchKeyword) {
  for (let i = 0; i < booksArray.length; i++) {
    let book = booksArray[i];

    if (book.title.toLowerCase() === searchKeyword.toLowerCase()) {
      return book;
    }
  }

  return null;
}

let searchKeyword = "1984";
let foundBook = searchBookByTitle(books, searchKeyword);
if (foundBook) {
    console.log(`\n\ntask 3\n\n Found book: ${foundBook.title} by ${foundBook.author}. It has ${foundBook.numPages} pages.`);
} else {
    console.log('task 3 Book not found.');
}

// ---------------------------------------------------------------------------------------------
