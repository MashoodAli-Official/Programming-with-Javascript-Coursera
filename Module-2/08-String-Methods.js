// We can manipulate strings in JavaScript using various methods.
// Here are some common string methods:
const str = "Hello, World!";
console.log("Length of String: ",str.length); // Returns the length of the string
console.log("String to uppercase: ",str.toUpperCase()); // Converts the string to uppercase
console.log("String to lowercase",str.toLowerCase()); // Converts the string to lowercase
console.log("Index position: ",str.indexOf("World")); // Returns the index of the first occurrence of "World"
console.log("Extracted string: ",str.slice(0, 5)); // Extracts a section of the string from index 0 to 5
console.log("New String after replacing: ",str.replace("World", "JavaScript")); // Replaces "World" with "JavaScript"
console.log("Separate two string with , :",str.split(", ")); // Splits the string into an array using ", " as the separator
console.log("Removing the white space between strings: ",str.trim()); // Removes whitespace from both ends of the string
console.log("Check the string start with specific word: ",str.startsWith("Hello")); // Checks if the string starts with "Hello"
console.log("Check the string ends with specific sign or character: ",str.endsWith("!")); // Checks if the string ends with "!"
console.log("Check if string contains specific character or characters: ",str.includes("lo")); // Checks if the string contains "lo"
console.log("Returns the character at index 0 :",str.charAt(0)); // Returns the character at index 0
console.log("Returns the Unicode of the character at index 0 :",str.charCodeAt(0)); // Returns the Unicode of the character at index 0
console.log("Concatenation:  ",str.concat(" How are you?")); // Concatenates another string to the original string
console.log("Repeat the string: ",str.repeat(2)); // Repeats the string 2 times
console.log("Search specific string and return it's index:  ",str.search("World")); // Searches for "World" and returns its index
console.log("Returns an array of all matches of 'l' in the string",str.match(/l/g)); // Returns an array of all matches of "o" in the string
console.log("Compares two strings in the current locale: ",str.localeCompare("Hello, World!")); // Compares two strings in the current locale
console.log("Add the * at the start of string: ",str.padStart(20, "*")); // Pads the string at the start with "*"
console.log("Add the * at the end of string: ",str.padEnd(20, "*")); // Pads the string at the end with "*"
console.log("Split the string in characters: ",str.split("")); // Splits the string into an array of characters
console.log("Returns the index of the last occurrence of 'o': ",str.lastIndexOf("o")); // Returns the index of the last occurrence of "o"
console.log("Extracts a substring from index: ",str.substring(0, 5)); // Extracts a substring from index