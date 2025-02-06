// Object

// In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair. 
// Objects are used to store and manage data in a structured way, allowing you to group related data and functions together.

// Characteristics of Objects
// Key-Value Pairs: Each property in an object is a key-value pair, where the key is a string (or symbol) and the value can be any data type, including other objects and functions.
// Dynamic: Objects can be modified at runtime by adding, updating, or deleting properties.
// Methods: Functions can be stored as properties of an object, and these functions are called methods.

// Define an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    // Method to get full name
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Calling a method
console.log(person.getFullName()); // Output: John Doe

// Adding a new property
person.address = "123 Main St";
console.log(person.address); // Output: 123 Main St

// Updating a property
person.age = 31;
console.log(person.age); // Output: 31

// Deleting a property
delete person.isEmployed;
console.log(person.isEmployed); // Output: undefined

// person.keys() .values() .delete() .entries()
// Insert - O(1)
// Remove - O(1)
// Search - O(n)
// Access - O(1)
// object.keys() - O(n)
// object.values() - O(n)
// object.entries() - O(n)