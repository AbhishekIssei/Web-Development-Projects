// Algorithm: A step-by-step procedure for solving a problem or performing a computation.
// Time Complexity: Measures the amount of time an algorithm takes to complete as a function of the input size, 
// expressed in Big O notation.
// Space Complexity: Measures the amount of memory an algorithm uses as a function of the input size, 
// also expressed in Big O notation.

// Common Asymptotic Notations:

// Big O Notation (O):
// Describes the upper bound of an algorithm's running time.
// It provides the worst-case scenario for the growth rate of the algorithm.
// Example: O(n), O(log n), O(n^2)

// Big Omega Notation (Ω):
// Describes the lower bound of an algorithm's running time.
// It provides the best-case scenario for the growth rate of the algorithm.
// Example: Ω(n), Ω(log n), Ω(n^2)

// Big Theta Notation (Θ):
// Describes the tight bound of an algorithm's running time.
// It provides both the upper and lower bounds, meaning the algorithm's running time grows at the same rate in both the best and worst cases.
// Example: Θ(n), Θ(log n), Θ(n^2)

// Big O Notation (O): Imp
// Describes the upper bound of an algorithm's running time.
// It has two important characteristics.
// 1. it is expressed in terms of the input.
// 2. it focuses on the bigger picture without getting caught in minute details.
// Example: O(n), O(log n), O(n^2)


// Big O Time complexity:
// O(1) - Constant Time and Space Complexity
function getFirstElement(arr) {
    return arr[0]; // Accessing the first element takes constant time and space
}

// O(n) - Linear Time and Space Complexity
function printAllElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // Iterating through all elements takes linear time
    }
    // Space complexity is O(1) if we don't consider the input array
}

// O(n^2) - Quadratic Time Complexity
// O(1) - Constant Space Complexity
function printAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]); // Nested loops result in quadratic time complexity
        }
    }
    // Space complexity is O(1) if we don't consider the input array
}

// O(log n) - Logarithmic Time:

// The algorithm's running time grows logarithmically with the size of the input.
// Example: Binary search in a sorted array.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

