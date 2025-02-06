// Array
// An array is a data structure that can hold a collection of values.
// Arrays can contain a mix of different data types. You can store strings, booleans,
// numbers, objects, and even other arrays inside an array.
// Arrays are reziable. You don't have to declare the size of an array before creating it.
// JavaScript arrays are zero-indexed and the insertion order is maintained.

// Example
const arr = [1, 2, 3, 'Abhi'];
arr.push(4)
arr.unshift(0)
// arr.pop()
// arr.shift()

for (const item of arr) {
console.log(item);
}

// map, filter , reduce, concat, slice and splice

// Array - Big-O Complexity

// Insert / Remove from end  - O(1)
// Insert / Remove from start - O(n)
// Access - O(1)
// Search - O(n)
// Push / Pop - O(1)
// Unshift / Shift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)