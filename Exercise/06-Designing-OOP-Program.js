// Designing an OOP Program in JavaScript
// This program will create a simple library system with books and authors
//                  Book
//                 /    \
//            Author    Publisher
//              /         \
//         BookAuthor    BookPublisher

class Book {
    constructor(title, author, publisher) {
        this.title = title;
        this.author = author; // Instance of Author
        this.publisher = publisher; // Instance of Publisher
    }

    getDetails(){
        return `${this.title} by ${this.author.name}, published by ${this.publisher.name}`;
    }
};

class Author {
    constructor(name) {
        this.name = name;
    }
};

class Publisher {
    constructor(name) {
        this.name = name;
    }
};

class BookAuthor {
    constructor(book, author) {
        this.book = book; // Instance of Book
        this.author = author; // Instance of Author
    }

    getBookAuthorDetails() {
        return `${this.book.title} is written by ${this.author.name}`;
    }
};

class BookPublisher {
    constructor(book, publisher) {
        this.book = book; // Instance of Book
        this.publisher = publisher; // Instance of Publisher
    }

    getBookPublisherDetails() {
        return `${this.book.title} is published by ${this.publisher.name}`;
    }
};

// Example usage
const author1 = new Author("J.K. Rowling");
const publisher1 = new Publisher("Bloomsbury");
const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, publisher1);
const bookAuthor1 = new BookAuthor(book1, author1);
const bookPublisher1 = new BookPublisher(book1, publisher1);
console.log(book1.getDetails()); // Harry Potter and the Philosopher's Stone by J.K. Rowling, published by Bloomsbury
console.log(bookAuthor1.getBookAuthorDetails()); // Harry Potter and the Philosopher's Stone is written by J.K. Rowling
console.log(bookPublisher1.getBookPublisherDetails()); // Harry Potter and the Philosopher's Stone is published by Bloomsbury
// This code demonstrates how to design an OOP program in JavaScript with classes, constructors,
// and relationships between objects. It creates a simple library system with books, authors, and publishers
// and shows how to retrieve details about them using methods.