// String in javascript is a primitive data type. The primitive data type is a basic data type that is not composed of other data types.
// Strings are immutable, meaning once created, they cannot be changed.
// It is used to represent text data.

// Strings can be created using single quotes, double quotes, or backticks (template literals).
var userName = "John Doe";
var userEmail = 'JohnDoe@email.com';
var message = `Hello, ${userName}! Welcome to the platform and your email is ${userEmail}.`;
console.log(message);
console.log(userEmail + " " + userName);