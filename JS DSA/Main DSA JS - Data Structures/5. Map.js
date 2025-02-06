// Map

// In JavaScript, a Map is a built-in object that allows you to store key-value pairs. 
// Unlike objects, which only allow strings and symbols as keys,
// a Map can use any value (including functions, objects, and primitive values) as a key.

// Characteristics of a Map
// Key-Value Pairs: Each element in a Map is stored as a key-value pair.
// Unique Keys: Each key in a Map must be unique. If you try to set a key that already exists, 
// the value will be updated.
// Order: The elements in a Map are ordered by insertion order.
// Iterable: A Map is iterable, meaning you can loop through its elements.

// Object VS Map
// Object
// Key Types: Keys must be strings or symbols.
// Key Order: Keys are not guaranteed to be ordered, although modern JavaScript engines maintain the order of string keys.
// Default Properties: Objects have a prototype, which means they come with default properties that can be shadowed by custom properties.
// Performance: Generally faster for small sets of key-value pairs.
// Syntax: Easier and more concise syntax for creating and accessing properties.
// Map
// Key Types: Keys can be of any type, including functions, objects, and primitive values.
// Key Order: Keys are ordered by insertion order.
// Default Properties: Maps do not have default properties; they are purely for storing key-value pairs.
// Performance: Better performance for frequent additions and removals of key-value pairs.
// Methods: Provides built-in methods like set, get, has, delete, and clear.

// Define a new Map
let myMap = new Map();

// Add key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('isEmployed', true);

// Check the size of the Map
console.log(myMap.size); // Output: 3

// Get a value by key
console.log(myMap.get('name')); // Output: John
console.log(myMap.get('age')); // Output: 30

// Check if a key exists in the Map
console.log(myMap.has('isEmployed')); // Output: true
console.log(myMap.has('address')); // Output: false

// Remove a key-value pair from the Map
myMap.delete('age');
console.log(myMap.has('age')); // Output: false

// Iterate over the Map
myMap.forEach((value, key) => {
    console.log(key + ': ' + value);
    // Output: 
    // name: John
    // isEmployed: true
});

// Convert Map to Array
let myArray = Array.from(myMap);
console.log(myArray); // Output: [['name', 'John'], ['isEmployed', true]]

// Clear all key-value pairs from the Map
myMap.clear();
console.log(myMap.size); // Output: 0