// Simple OOP exercise in JavaScript// Simple OOP exercise in JavaScript

function scopeTest() {
    if (true) {
        var x = 10;    // function-scoped
        let y = 20;    // block-scoped
        const z = 30;  // block-scoped
        console.log("Inside block: x =", x); // 10
        console.log("Inside block: y =", y); // 20
        console.log("Inside block: z =", z); // 30
    }
    console.log("Outside block: x =", x); // 10
    // The following lines will throw ReferenceError
    // console.log("Outside block: y =", y);
    // console.log("Outside block: z =", z);
}

scopeTest();