
// This line was for Node.js testing, commented out to test in browser instead
// const users = require("./users");

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
console.log("\n\ntask 1\n\n", book);
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

console.log("\n\ntask 2\n\n", books);

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
  console.log(
    `\n\ntask 3\n\n Found book: ${foundBook.title} by ${foundBook.author}. It has ${foundBook.numPages} pages.`
  );
} else {
  console.log("task 3 Book not found.");
}

// ---------------------------------------------------------------------------------------------

console.log("Excercise: Letter Frequency");
/*Letter Frequency
Räkna tecken i en sträng och organisera detta i ett objekt. Skapa en funktion som tar en sträng som input och ger ett objekt som output.

Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet.

Denna övning kräver dynamiska nycklar.

letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa") // => {"a": 4}
letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }
 */

function letterFrequency(string) {
  // console.log('hello from letter frequency function');
  let frequencyCount = {};
  string.split("").forEach((character) => {
    if (frequencyCount[character]) {
      frequencyCount[character]++;
      //   console.log("frequencyCount", frequencyCount);
      //   console.log(character);
    } else {
      frequencyCount[character] = 1;
    }
  });
  return frequencyCount;
}
console.log(letterFrequency("kalle"));
console.log(letterFrequency("aaaa"));
console.log(letterFrequency("ni talar bra latin"));
console.log(`The rain in Spain stays mainly on the plain ${JSON.stringify(letterFrequency("The rain in Spain stays mainly on the plain"))}`);

// ---------------------------------------------------------------------------------------------
