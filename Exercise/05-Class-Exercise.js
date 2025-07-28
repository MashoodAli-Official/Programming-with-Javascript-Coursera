// As we all know in JavaScript, classes are use as the blueprint for creating objects with shared properties and methods.
// Here is an example of how to create a class in JavaScript and use it to create an object with properties and methods.

// 1️⃣st we have to create a class using the `class` keyword followed by the class name.
class Bike {
    // 2️⃣nd need to define a constructor with parameters to initialize properties.
    bikeDetails(brand, type, year) {
        this.brand = brand;
        this.type = type;
        this.year = year;
    }

    // 3️⃣rd we can define methods inside the class to perform actions or behaviors related to the class.
    displayDetails() {
        console.log(`Bike brand: ${this.brand}, Type: ${this.type}, Year: ${this.year}`);
    }
}

// 4️⃣th need to create an instance of the class using the `new` keyword followed by the class name and passing any required parameters to the constructor.
const newBike = new Bike();

// 5️⃣th we can set properties and call methods on the instance.
newBike.bikeDetails('Yamaha', 'Sport', 2021); // Setting properties

// 6️⃣th we can call the method to display the details of the bike.
newBike.displayDetails(); // Output: Bike brand: Yamaha, Type: Sport, Year: 2021