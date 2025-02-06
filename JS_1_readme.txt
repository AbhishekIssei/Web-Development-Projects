// JS Part 1
// JS introduction
// Var, Let, Const:
// Hoisting:
// Data Types in JavaScript
// Conditionals in JavaScript
// Loops in JavaScript
// Functions in JavaScript
// Parameters and Arguments in JavaScript
// Array
// Objects
// Methods in Object
// Properties


// JS introduction
JavaScript is a high-level, interpreted programming language that is commonly used to create interactive effects within web browsers. 
It is a core technology of the World Wide Web, alongside HTML and CSS. 
JavaScript enables dynamic content, control multimedia, animate images, and pretty much everything else. 
It is a versatile language that can be used for both client-side and server-side development.

// Var, Let, Const:
var: Declares a variable, optionally initializing it to a value. 
Variables declared with `var` are function-scoped or globally-scoped if declared outside a function. 
They can be re-declared and updated.
Example:
 
var x = 10;
var x = 20; // re-declaration is allowed
x = 30; // updating is allowed
console.log(x); // Output: 30

let: Declares a block-scoped local variable, optionally initializing it to a value. 
Variables declared with let can be updated but not re-declared within the same scope. 
Example:

let y = 10;
// let y = 20; // SyntaxError: Identifier 'y' has already been declared
y = 20; // updating is allowed
console.log(y); // Output: 20

const: Declares a block-scoped, read-only named constant. 
The value of a const variable cannot be changed through reassignment, 
and it cannot be re-declared. 
Example:

const z = 10;
// z = 20; // TypeError: Assignment to constant variable.
// const z = 30; // SyntaxError: Identifier 'z' has already been declared
console.log(z); // Output: 10

// Hoisting:
 Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. 
This means that you can use variables and functions before they are declared in the code.

var hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined. 
Example:
console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5

let and const hoisting: Variables declared with let and const are also hoisted to the top of their scope but are not initialized. 
Accessing them before declaration results in a ReferenceError. 
Example:
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 5;
console.log(b); // Output: 5

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 5;
console.log(c); // Output: 5

// Data Types in JavaScript:
JavaScript has dynamic types, meaning variables can hold different data types at different times. The main data types in JavaScript are:

1. Primitive Data Types:
   - `Number`: Represents both integer and floating-point numbers.
     Example:
     ```javascript
     let num = 42;
     let floatNum = 3.14;
     ```

   - `String`: Represents a sequence of characters.
     Example:
     ```javascript
     let str = "Hello, world!";
     ```

   - `Boolean`: Represents a logical entity and can have two values: `true` or `false`.
     Example:
     ```javascript
     let isTrue = true;
     let isFalse = false;
     ```

   - `Undefined`: Represents a variable that has been declared but not assigned a value.
     Example:
     ```javascript
     let undef;
     console.log(undef); // Output: undefined
     ```

   - `Null`: Represents the intentional absence of any object value.
     Example:
     ```javascript
     let empty = null;
     ```

   - `Symbol`: Represents a unique and immutable primitive value.
     Example:
     ```javascript
     let sym = Symbol("unique");
     ```

   - `BigInt`: Represents whole numbers larger than 2^53 - 1.
     Example:
     ```javascript
     let bigInt = BigInt(1234567890123456789012345678901234567890);
     ```

2. Non-Primitive Data Types:
   - `Object`: Represents a collection of properties and methods.
     Example:
     ```javascript
     let obj = {
       name: "John",
       age: 30
     };
     ```

   - `Array`: Represents an ordered collection of elements.
     Example:
     ```javascript
     let arr = [1, 2, 3, 4, 5];
     ```

   - `Function`: Represents a block of code designed to perform a particular task.
     Example:
     ```javascript
     function greet() {
       console.log("Hello, world!");
     }
     ```

JavaScript is dynamically typed, meaning a variable's type can change at runtime. This flexibility allows for powerful and expressive code but requires careful handling to avoid type-related errors.

// Conditionals in JavaScript
Conditionals are used to perform different actions based on different conditions. 
The main conditional statements in JavaScript are `if`, `else if`, `else`, and `switch`.

1. `if` statement:
   Executes a block of code if a specified condition is true.
   Example:
   ```javascript
   let age = 18;
   if (age >= 18) {
     console.log("You are an adult.");
   }


2. else statement: Executes a block of code if the same condition is false. 
Example:
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

3. else if statement: Specifies a new condition to test if the first condition is false. 
Example:
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

4. switch statement: Evaluates an expression and executes code blocks based on matching case values. 
Example:
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// Loops in JavaScript
Loops are used to execute a block of code repeatedly until a specified condition is met. 
The main types of loops in JavaScript are for, while, do...while, and for...in.

1. for loop: Repeats a block of code a specified number of times. 
Example:
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
}

2. while loop: Repeats a block of code as long as a specified condition is true. 
Example:
let i = 0;
while (i < 5) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
}

3. do...while loop: Repeats a block of code at least once, and then continues to repeat as long as a specified condition is true. 
Example:
let i = 0;
do {
  console.log(i); // Outputs: 0, 1, 2, 3, 4
  i++;
} while (i < 5);


// Functions in JavaScript
Functions are blocks of code designed to perform a particular task. 
They are executed when they are called (invoked).

1. Function Declaration: A function can be declared using the function keyword. 
Example:
function greet() {
  console.log("Hello, world!");
}
greet(); // Outputs: Hello, world!

2. Function Expression: A function can also be defined using a function expression. 
Example:
const greet = function() {
  console.log("Hello, world!");
};
greet(); // Outputs: Hello, world!

3. Arrow Function: ES6 introduced arrow functions, which provide a shorter syntax. 
Example:
const greet = () => {
  console.log("Hello, world!");
};
greet(); // Outputs: Hello, world!

4. Parameters and Arguments: Functions can take parameters and be called with arguments. 
Example:
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Outputs: 5

5. Default Parameters: ES6 introduced default parameters, allowing parameters to have default values. 
Example:
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greet(); // Outputs: Hello, Guest!
greet("John"); // Outputs: Hello, John!

6. Rest Parameters: Rest parameters allow a function to accept an indefinite number of arguments as an array. 
Example:
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10

// Parameters and Arguments in JavaScript

Parameters are the names listed in the function definition.
Arguments are the real values passed to the function when it is invoked.

Example:
function multiply(a, b) { // a and b are parameters
  return a * b;
}

console.log(multiply(2, 3)); // 2 and 3 are arguments

// Array
In JavaScript, an array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, and even other arrays. 
Arrays are zero-indexed, meaning the first element is at index 0.

// Creating an array
var fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Adding elements
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]

// Removing elements
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Iterating over an array
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// The shift method removes the first element from an array and returns that element. 
This method changes the length of the array.
var fruits = ["Apple", "Banana", "Cherry"];
var firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apple
console.log(fruits); // Output: ["Banana", "Cherry"]

// The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
var fruits = ["Apple", "Banana", "Cherry"];
fruits.unshift("Orange");
console.log(fruits); // Output: ["Orange", "Apple", "Banana", "Cherry"]

// slice
The slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). 
The original array is not modified.

var fruits = ["Apple", "Banana", "Cherry", "Orange", "Mango"];

// Using slice to get a portion of the array
var citrus = fruits.slice(2, 4);
console.log(citrus); // Output: ["Cherry", "Orange"]
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Orange", "Mango"]

// splice
The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
This method modifies the original array.

var fruits = ["Apple", "Banana", "Cherry", "Orange", "Mango"];

// Using splice to remove elements
var removed = fruits.splice(2, 2);
console.log(removed); // Output: ["Cherry", "Orange"]
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

// Using splice to add elements
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // Output: ["Apple", "Banana", "Lemon", "Kiwi", "Mango"]

// Using splice to replace elements
fruits.splice(2, 2, "Grapes", "Pineapple");
console.log(fruits); // Output: ["Apple", "Banana", "Grapes", "Pineapple", "Mango"]

// Object
In JavaScript, objects are collections of key-value pairs. 
Each key is a string (also called a property name), and each value can be any data type, 
including other objects. Objects are used to store and manage data in a structured way.

// Object literal syntax
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Adding a new property
person.email = "john.doe@example.com";
console.log(person.email); // Output: john.doe@example.com

// Removing a property
delete person.age;
console.log(person.age); // Output: undefined

// Iterating over an object's properties
for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

// Methods in Objects
Objects can also have methods, which are functions stored as object properties.

var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // Output: John Doe

Using the this Keyword
The this keyword refers to the current object and is often used in methods to access object properties.

var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function() {
        return this.year + " " + this.make + " " + this.model;
    }
};

console.log(car.getCarInfo()); // Output: 2020 Toyota Camry

// Properties (Props)
Properties are values associated with an object. They are used to store data about the object. 
Properties can be accessed and modified using dot notation or bracket notation.

var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// Accessing properties
console.log(car.make); // Output: Toyota
console.log(car["model"]); // Output: Camry

// Modifying properties
car.year = 2021;
console.log(car.year); // Output: 2021

// Methods
Methods are functions that are properties of an object. 
They are used to perform actions or operations on the object. 
Methods can access and modify the object's properties using the this keyword.

var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function() {
        return this.year + " " + this.make + " " + this.model;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    }
};

// Calling methods
console.log(car.getCarInfo()); // Output: 2020 Toyota Camry
car.updateYear(2021);
console.log(car.getCarInfo()); // Output: 2021 Toyota Camry

// Updating Object Properties
In JavaScript, you can update object properties using dot notation or bracket notation. 
Here are some examples:

// Using Dot Notation
Dot notation is the most common way to access and update properties of an object.

var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// Updating properties using dot notation
car.year = 2021;
car.model = "Corolla";

console.log(car.year); // Output: 2021
console.log(car.model); // Output: Corolla

// Using Bracket Notation
Bracket notation is useful when the property name is dynamic or not a valid identifier.

var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// Updating properties using bracket notation
car["year"] = 2021;
car["model"] = "Corolla";

console.log(car["year"]); // Output: 2021
console.log(car["model"]); // Output: Corolla

// Dynamic Property Names
You can use bracket notation to update properties with dynamic names.

var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

var propertyName = "year";
car[propertyName] = 2021;

propertyName = "model";
car[propertyName] = "Corolla";

console.log(car.year); // Output: 2021
console.log(car.model); // Output: Corolla

