// JS Part 2
// Window Object
// Stack
// Heap Memory
// Execution Context
// Lexical Environment
// How to copy reference values
// Truthy vs Falsy
// for in, for of an forEach
// Callback Functions
// How Arrays are Made Behind the Scenes
// How to delete object properties


// Window Object:
The `window` object is the global object in a web browser environment. 
It represents the browser window or frame containing the DOM document. 
All global JavaScript objects, functions, and variables automatically become members of the `window` object. 

Examples:
Accessing the `window` object:

console.log(window); // Outputs the window object

// Alert method
window.alert("Hello, world!");

// Inner height and width of the window
console.log(window.innerHeight); // Outputs the height of the window's content area
console.log(window.innerWidth); // Outputs the width of the window's content area

// Location object
console.log(window.location.href); // Outputs the current URL
window.location.href = "https://www.example.com"; // Redirects to the specified URL

Global variables and functions:
var globalVar = "I am a global variable";
function globalFunction() {
  console.log("I am a global function");
}

console.log(window.globalVar); // Outputs: I am a global variable
window.globalFunction(); // Outputs: I am a global function

Browser Context API: The Browser Context API provides a way to interact with the browser's context,
such as tabs, windows, and frames. 
It allows developers to manage and manipulate these contexts programmatically.

Opening a new window or tab:
// Open a new window
var newWindow = window.open("https://www.example.com", "_blank", "width=600,height=400");

// Open a new tab
var newTab = window.open("https://www.example.com", "_blank");

Closing a window:
// Close the new window
newWindow.close();

// Access the parent window from a child window
console.log(window.opener);

// Access the child window from the parent window
console.log(newWindow);
// Access the parent window from a child window
console.log(window.opener);

// Access the child window from the parent window
console.log(newWindow);

Managing frames:
// Access a frame by name
var frame = window.frames["frameName"];

// Access a frame by index
var frame = window.frames[0];

// Access the parent window from a frame
console.log(window.parent);

// Stack
A stack is a data structure that follows the Last In, First Out (LIFO) principle. 
You can implement a stack in JavaScript using an array. 
The primary operations for a stack are push (to add an element to the top) and pop (to remove the top element).

Implementing a Stack
Here's a simple implementation of a stack using JavaScript:
class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Return the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Empty the stack
    clear() {
        this.items = [];
    }
}

// Example usage
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.pop());  // Output: 30
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
stack.clear();
console.log(stack.isEmpty()); // Output: true

// Heap Memory
In JavaScript, heap memory is used for dynamic memory allocation where variables, objects, and data structures are stored. 
The heap is an area of memory where JavaScript stores objects and functions. 
Unlike the stack, which is used for static memory allocation and function call management, 
the heap is used for more complex memory management.

Key Points about Heap Memory in JavaScript
Dynamic Allocation: Objects and functions are allocated in the heap because their size can change dynamically.
Garbage Collection: JavaScript has an automatic garbage collector that periodically scans the heap to identify and reclaim memory that is no longer in use.
Memory Leaks: Improper management of heap memory can lead to memory leaks, 
where memory that is no longer needed is not released.

Example of Heap Memory Usage
When you create objects or functions, they are stored in the heap:
// Creating an object (allocated in heap memory)
var person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

// Creating another object (allocated in heap memory)
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// Functions are also stored in heap memory
function add(a, b) {
    return a + b;
}

Garbage Collection
JavaScript engines, like V8 (used in Chrome and Node.js), use garbage collection to manage heap memory. 
The garbage collector automatically frees up memory that is no longer reachable or needed by the program.

Avoiding Memory Leaks
To avoid memory leaks, ensure that you:

Remove references to objects that are no longer needed.
Be cautious with global variables and closures, as they can unintentionally hold onto memory.
Use tools and profilers to monitor memory usage and identify leaks.

// Execution Context
In JavaScript, the execution context is an abstract concept that holds information about the environment within which the current code is being executed. It includes details about variables, objects, and functions that are accessible at a particular point in time.

Types of Execution Contexts

Global Execution Context: This is the default execution context where the JavaScript code starts execution. 
It creates a global object (e.g., window in browsers) and sets up the global scope.
Function Execution Context: Created whenever a function is invoked. 
Each function has its own execution context.
Eval Execution Context: Created when code is executed inside an eval function.

Components of Execution Context

Variable Object (VO): Contains function arguments, inner variable declarations, and function declarations.
Scope Chain: Consists of the current variable object and its parent scopes. 
It ensures that variables and functions are accessible in the current context.
this Keyword: Refers to the object that is currently executing the code.

Execution Context Lifecycle

Creation Phase:
The scope chain is created.
The variable object is created and initialized.
The value of this is determined.

Execution Phase:
The code is executed.
Variables and functions are assigned values.

var globalVar = "I am a global variable";

function outerFunction(outerArg) {
    var outerVar = "I am an outer variable";

    function innerFunction(innerArg) {
        var innerVar = "I am an inner variable";
        console.log(globalVar); // Accessible
        console.log(outerVar);  // Accessible
        console.log(innerVar);  // Accessible
        console.log(outerArg);  // Accessible
        console.log(innerArg);  // Accessible
    }

    innerFunction("Inner Argument");
}

outerFunction("Outer Argument");

// Lexical environment
In JavaScript, a lexical environment is a structure that holds identifier-variable mappings (i.e., where variable names are mapped to the locations storing their values).
 A lexical environment is created whenever a function is invoked or a block is entered (in the case of block-scoped variables).

Components of a Lexical Environment
Environment Record: An object that holds the actual bindings of variables and functions.
Outer Lexical Environment Reference: A reference to the lexical environment of the parent (the environment in which the function or block was defined).

Lexical Scoping
Lexical scoping means that the accessibility of variables is determined by the position of the variables within the nested function scopes. 
Inner functions have access to variables defined in their outer scope.

Example:
var globalVar = "I am a global variable";

function outerFunction(outerArg) {
    var outerVar = "I am an outer variable";

    function innerFunction(innerArg) {
        var innerVar = "I am an inner variable";
        console.log(globalVar); // Accessible
        console.log(outerVar);  // Accessible
        console.log(innerVar);  // Accessible
        console.log(outerArg);  // Accessible
        console.log(innerArg);  // Accessible
    }

    innerFunction("Inner Argument");
}

outerFunction("Outer Argument");

Lexical Environment and Closures
A closure is a function that retains access to its lexical environment, 
even when the function is executed outside that environment.

function outerFunction(outerArg) {
    var outerVar = "I am an outer variable";

    return function innerFunction(innerArg) {
        console.log(outerVar);  // Accessible
        console.log(outerArg);  // Accessible
    };
}

var closure = outerFunction("Outer Argument");
closure("Inner Argument"); // Output: I am an outer variable, Outer Argument

// How to copy reference values
In JavaScript, reference values (such as objects and arrays) are copied by reference, not by value. 
This means that when you copy an object or array, both the original and the copy point to the same memory location. However, 
there are ways to create a shallow or deep copy of these reference values.

1. Shallow Copy
A shallow copy creates a new object or array, but does not recursively copy nested objects or arrays. 
Instead, it copies the references to them.

Using Object.assign for Objects
var originalObject = { a: 1, b: { c: 2 } };
var shallowCopy = Object.assign({}, originalObject);

console.log(shallowCopy); // Output: { a: 1, b: { c: 2 } }
shallowCopy.b.c = 3;
console.log(originalObject.b.c); // Output: 3 (both objects share the same reference)

2. Using Spread Operator for Objects and Arrays
// For objects
var originalObject = { a: 1, b: { c: 2 } };
var shallowCopy = { ...originalObject };

console.log(shallowCopy); // Output: { a: 1, b: { c: 2 } }
shallowCopy.b.c = 3;
console.log(originalObject.b.c); // Output: 3 (both objects share the same reference)

// For arrays
var originalArray = [1, 2, { a: 3 }];
var shallowCopyArray = [...originalArray];

console.log(shallowCopyArray); // Output: [1, 2, { a: 3 }]
shallowCopyArray[2].a = 4;
console.log(originalArray[2].a); // Output: 4 (both arrays share the same reference)

3. Deep Copy
A deep copy creates a new object or array and recursively copies all nested objects or arrays.

Using JSON.parse and JSON.stringify
This method works well for simple objects and arrays, but it does not handle functions, 
undefined, or circular references.

var originalObject = { a: 1, b: { c: 2 } };
var deepCopy = JSON.parse(JSON.stringify(originalObject));

console.log(deepCopy); // Output: { a: 1, b: { c: 2 } }
deepCopy.b.c = 3;
console.log(originalObject.b.c); // Output: 2 (original object is not affected)

4. Using a Recursive Function
For more complex objects, you can write a custom recursive function to perform a deep copy.

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        var copy = [];
        for (var i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    var copy = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

var originalObject = { a: 1, b: { c: 2 } };
var deepCopyObject = deepCopy(originalObject);

console.log(deepCopyObject); // Output: { a: 1, b: { c: 2 } }
deepCopyObject.b.c = 3;
console.log(originalObject.b.c); // Output: 2 (original object is not affected)

// Truthy vs Falsy
In JavaScript, truthy and falsy values determine how values are evaluated in a boolean context, such as in conditionals (if statements) or logical operations.

Falsy Values
Falsy values are values that evaluate to false when converted to a boolean. There are only a few falsy values in JavaScript:

false
0 (zero)
"" (empty string)
null
undefined
NaN (Not-a-Number)

Example of Falsy Values
if (!false) console.log("false is falsy"); // Output: false is falsy
if (!0) console.log("0 is falsy"); // Output: 0 is falsy
if (!"") console.log('"" is falsy'); // Output: "" is falsy
if (!null) console.log("null is falsy"); // Output: null is falsy
if (!undefined) console.log("undefined is falsy"); // Output: undefined is falsy
if (!NaN) console.log("NaN is falsy"); // Output: NaN is falsy

Truthy Values
Truthy values are all values that are not falsy. Essentially, any value that is not one of the falsy values listed above is considered truthy.

Example of Truthy Values
if (true) console.log("true is truthy"); // Output: true is truthy
if (1) console.log("1 is truthy"); // Output: 1 is truthy
if ("non-empty string") console.log('"non-empty string" is truthy'); // Output: "non-empty string" is truthy
if ({}) console.log("{} is truthy"); // Output: {} is truthy
if ([]) console.log("[] is truthy"); // Output: [] is truthy
if (function() {}) console.log("function is truthy"); // Output: function is truthy

//for in, for of
1. for...in loop: Iterates over the enumerable properties of an object. 
Example:
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
  console.log(key + ": " + obj[key]); // Outputs: a: 1, b: 2, c: 3
}

2. for...of loop: Iterates over the values of an iterable object (like an array). 
Example:
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value); // Outputs: 1, 2, 3, 4, 5
}

//forEach
In JavaScript, the forEach method is used to execute a provided function once for each array element. 
It is a convenient way to iterate over arrays without using a traditional for loop.

Syntax
array.forEach(callback(currentValue, index, array), thisArg);

callback: Function to execute on each element. It takes three arguments:
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array forEach was called upon.
thisArg (optional): Value to use as this when executing the callback.

Example
let arr = [1, 2, 3, 4, 5];

arr.forEach(function(element, index, array) {
    console.log("Element: " + element + ", Index: " + index);
    // Output:
    // Element: 1, Index: 0
    // Element: 2, Index: 1
    // Element: 3, Index: 2
    // Element: 4, Index: 3
    // Element: 5, Index: 4
});

Using Arrow Functions
You can also use arrow functions with forEach for more concise syntax.
let arr = [1, 2, 3, 4, 5];

arr.forEach((element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);
    // Output:
    // Element: 1, Index: 0
    // Element: 2, Index: 1
    // Element: 3, Index: 2
    // Element: 4, Index: 3
    // Element: 5, Index: 4
});

// Callback Functions
In JavaScript, a callback function is a function that is passed as an argument to another
function and is executed after some operation has been completed. 
Callback functions are used to handle asynchronous operations, such as reading files, 
making HTTP requests, or handling events.

Example of a Callback Function
Synchronous Callback
A synchronous callback is executed immediately within the function it is passed to.
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!

Asynchronous Callback
An asynchronous callback is executed after an asynchronous operation has been completed.
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data");
}

fetchData(processData);
// Output (after 2 seconds):
// Data fetched
// Processing data

Using Callbacks with Array Methods
Many array methods, such as forEach, map, filter, and reduce, use callback functions.
let numbers = [1, 2, 3, 4, 5];

// Using a callback with forEach
numbers.forEach(function(number) {
    console.log(number);
});
// Output:
// 1
// 2
// 3
// 4
// 5

// Using a callback with map
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//How Arrays are Made Behind the Scenes
In JavaScript, arrays are objects with special properties and methods that allow them to behave like arrays. They are dynamic, meaning they can grow and shrink in size, and they can hold elements of any type.

Key Points:
Array Structure: Internally, arrays are objects with integer keys and a length property.
Dynamic Resizing: Arrays can dynamically resize as elements are added or removed.
Sparse Arrays: Arrays can have gaps, meaning not all indices need to have values.

Example of Array Internals
let arr = [1, 2, 3];
console.log(arr); // Output: [1, 2, 3]
console.log(arr.length); // Output: 3

// Adding an element
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]
console.log(arr.length); // Output: 4

// Removing an element
arr.pop();
console.log(arr); // Output: [1, 2, 3]
console.log(arr.length); // Output: 3

// Sparse array
arr[10] = 11;
console.log(arr); // Output: [1, 2, 3, empty × 7, 11]
console.log(arr.length); // Output: 11

Negative Indices in JavaScript Arrays
JavaScript does not natively support negative indices for arrays like some other languages (e.g., Python). 
However, you can simulate negative indices by using a custom getter and setter.

Example of Simulating Negative Indices
class NegativeIndexArray extends Array {
    constructor(...args) {
        super(...args);
    }

    // Custom getter for negative indices
    get(index) {
        if (index < 0) {
            return this[this.length + index];
        }
        return this[index];
    }

    // Custom setter for negative indices
    set(index, value) {
        if (index < 0) {
            this[this.length + index] = value;
        } else {
            this[index] = value;
        }
    }
}

// Example usage
let arr = new NegativeIndexArray(1, 2, 3, 4, 5);
console.log(arr.get(-1)); // Output: 5
console.log(arr.get(-2)); // Output: 4

arr.set(-1, 10);
console.log(arr); // Output: [1, 2, 3, 4, 10]

// How to delete object properties
In JavaScript, you can delete properties from an object using the delete operator. 
This operator removes a property from an object and returns true if the property was successfully deleted, 
or false if the property could not be deleted.

Example of Deleting Object Properties
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

// Deleting a property
delete person.age;
console.log(person.age); // Output: undefined

// Deleting a nested property
delete person.address.city;
console.log(person.address.city); // Output: undefined

// Attempting to delete a non-existent property
var result = delete person.nonExistentProperty;
console.log(result); // Output: true

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

// Deleting a property
delete person.age;
console.log(person.age); // Output: undefined

// Deleting a nested property
delete person.address.city;
console.log(person.address.city); // Output: undefined

// Attempting to delete a non-existent property
var result = delete person.nonExistentProperty;
console.log(result); // Output: true

Example with Non-Configurable Properties
var obj = {};
Object.defineProperty(obj, 'nonConfigurableProp', {
    value: 42,
    configurable: false
});

console.log(obj.nonConfigurableProp); // Output: 42
var result = delete obj.nonConfigurableProp;
console.log(result); // Output: false
console.log(obj.nonConfigurableProp); // Output: 42
