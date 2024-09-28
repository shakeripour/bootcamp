class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isCheckedOut = false;
  }

  checkOut() {
    if (!this.isCheckedOut) {
      this.isCheckedOut = true;
      console.log(`${this.title} has been checked out.`);
    } else {
      console.log(`${this.title} is already checked out.`);
    }
  }

  returnBook() {
    if (this.isCheckedOut) {
      this.isCheckedOut = false;
      console.log(`${this.title} has been returned.`);
    } else {
      console.log(`${this.title} is already in the library.`);
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`${book.title} by ${book.author} has been added to the library.`);
  }

  displayAvailableBooks() {
    console.log("Available Books:");
    this.books.forEach(book => {
      if (!book.isCheckedOut) {
        console.log(`- ${book.title} by ${book.author}`);
      }
    });
  }
}

// Test our implementation
const library = new Library();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.displayAvailableBooks();

book1.checkOut();
book2.checkOut();
book2.checkOut(); // Try to check out an already checked out book

library.displayAvailableBooks();

book1.returnBook();
book3.returnBook(); // Try to return a book that wasn't checked out

library.displayAvailableBook