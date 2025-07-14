// Nested loop in JavaScript.
// The Nested loop is a loop inside another loop. This is useful for iterating over multi-dimensional arrays or performing complex iterations.
// Moreover it can reduce the use of for loop statements but on the other hand it can increase the time complexity of the code which cause the code to run slower.

for (var year = 2024; year <= 2025; year++) {
    console.log("Year: " + year);
    for (var month = 1; month <= 12; month++) {
        console.log("Month: " + month);
        for (var day = 1; day <= 30; day++) {
            console.log("Day: " + day);
        }
    }
}
console.log("All dates printed successfully.");