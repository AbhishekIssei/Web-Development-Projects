// Set
// In JavaScript, a Set is a built-in object that allows you to store unique values of any type, 
// whether primitive values or object references. 
// A Set is similar to an array, but it does not allow duplicate values.

// Characteristics of a Set
// Unique Values: Each value in a Set must be unique. If you try to add a duplicate value, 
// it will be ignored.
// Order: The values in a Set are ordered by insertion order.
// Iterable: A Set is iterable, meaning you can loop through its elements.

// Define a new Set
let mySet = new Set();

// Add values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate value, will be ignored

// Check the size of the Set
console.log(mySet.size); // Output: 3

// Check if a value exists in the Set
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(4)); // Output: false

// Remove a value from the Set
mySet.delete(2);
console.log(mySet.has(2)); // Output: false

// Iterate over the Set
mySet.forEach(value => {
    console.log(value); // Output: 1, 3
});

// Convert Set to Array
let myArray = Array.from(mySet);
console.log(myArray); // Output: [1, 3]

// Clear all values from the Set
mySet.clear();
console.log(mySet.size); // Output: 0

// Set vs Array
// Arrays can contain duplicate values whereas Sets cannot.
// Insertion order is maintained in arrays but it is not the case for sets
// Searching and deleting an element in the set is faster compared to arrays.