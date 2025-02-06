// JS Part 3
// Higher Order Function
// Constructor Function
// New Keyword
// iife
// First class Function
// Prototype
// Prototypal Inheritance
// this apply bind call
// Pure and Impure Functions
// Closures


// Higher Order Function
In JavaScript, higher-order functions are functions that either take other functions as arguments or return functions as their result. 
They are a key feature of functional programming and allow for more abstract and flexible code.

Characteristics of Higher-Order Functions
1. Accepting Functions as Arguments: A higher-order function can take one or more functions as arguments.
2. Returning Functions: A higher-order function can return a function as its result.

Examples of Higher-Order Functions

Accepting Functions as Arguments
function greet(name, formatter) {
    console.log(formatter(name));
}

function toUpperCase(name) {
    return name.toUpperCase();
}

function toLowerCase(name) {
    return name.toLowerCase();
}

greet("Alice", toUpperCase); // Output: ALICE
greet("Bob", toLowerCase);   // Output: bob

Returning Functions
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

Using Higher-Order Functions with Array Methods
Many of JavaScript's array methods are higher-order functions because they take callback functions as arguments.
// map
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// reduce
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

// Constructor Function
In JavaScript, constructor functions are used to create objects. 
They provide a way to define a blueprint for creating multiple objects with the same properties and methods. 
Constructor functions are typically named with a capital letter to distinguish them from regular functions.

Creating Objects with Constructor Functions

Defining a Constructor Function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

// Creating instances of Person
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith
console.log(person1.age); // Output: 30
console.log(person2.age); // Output: 25

Using Prototypes with Constructor Functions
To avoid duplicating methods for each instance, you can add methods to the constructor function's prototype. 
This way, all instances share the same method.
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

// Creating instances of Person
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith

// First Class Functions
In JavaScript, functions are considered first-class citizens. 
This means that functions can be treated like any other variable. 
They can be assigned to variables, passed as arguments to other functions, 
returned from functions, and stored in data structures.

Characteristics of First-Class Functions
1. Assigning Functions to Variables Functions can be assigned to variables, 
allowing them to be called using the variable name.
// filepath: /path/to/file
const greet = function(name) {
    return "Hello, " + name;
};

console.log(greet("Alice")); // Output: Hello, Alice

2. Passing Functions as Arguments Functions can be passed as arguments to other functions, 
enabling higher-order functions.
// filepath: /path/to/file
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

3. Returning Functions from Functions Functions can return other functions, 
allowing for the creation of function factories or closures.
// filepath: /path/to/file
function createGreeter(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
}

const greeter = createGreeter("Hello");
greeter("Alice"); // Output: Hello, Alice

4. Storing Functions in Data Structures Functions can be stored in arrays or objects, 
enabling dynamic function execution.
// filepath: /path/to/file
const operations = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(operations.add(5, 3)); // Output: 8
console.log(operations.subtract(5, 3)); // Output: 2

Example of First-Class Functions
// Assigning a function to a variable
const sayHello = function() {
    console.log("Hello!");
};

// Passing a function as an argument
function executeFunction(fn) {
    fn();
}

executeFunction(sayHello); // Output: Hello!

// Returning a function from a function
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// New Keyword
In JavaScript, the new keyword is used to create an instance of an object that has a constructor function. 
When you use the new keyword, it performs the following steps:

1. Creates a new empty object.
2. Sets the prototype of the new object to the prototype of the constructor function.
3. Binds this to the new object within the constructor function.
4. Executes the constructor function with the provided arguments.
5. Returns the new object, unless the constructor function explicitly returns a different object.

Example of Using the new Keyword
Defining a Constructor Function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

// Creating instances of Person using the `new` keyword
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith
console.log(person1.age); // Output: 30
console.log(person2.age); // Output: 25

Steps Performed by the new Keyword
1. Creates a New Object: An empty object is created.
const newObject = {};

2. Sets the Prototype: The prototype of the new object is set to the prototype of the constructor function.
newObject.__proto__ = Person.prototype;

3. Binds this: The this keyword within the constructor function is bound to the new object.
const result = Person.call(newObject, "John", "Doe", 30);

4. Executes the Constructor: The constructor function is executed with the provided arguments.
// Inside the constructor function
this.firstName = "John";
this.lastName = "Doe";
this.age = 30;

5. Returns the New Object: The new object is returned, unless the constructor function explicitly returns a different object.
return typeof result === 'object' ? result : newObject;

// iife
An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. 
It is a design pattern that is often used to create a new scope and avoid polluting the global namespace.

Syntax of an IIFE
An IIFE is created by wrapping a function expression in parentheses and then immediately invoking it with another set of parentheses.
(function() {
    // Code to be executed immediately
    console.log("This is an IIFE!");
})();

Example of an IIFE
(function() {
    var message = "Hello, World!";
    console.log(message); // Output: Hello, World!
})();

// The variable `message` is not accessible outside the IIFE
console.log(typeof message); // Output: undefined

IIFE with Parameters
You can also pass parameters to an IIFE.
(function(name) {
    console.log("Hello, " + name + "!");
})("Alice"); // Output: Hello, Alice!

IIFE with Arrow Functions
With ES6, you can use arrow functions to create IIFEs.
(() => {
    console.log("This is an IIFE with an arrow function!");
})();

Benefits of Using IIFE
Avoid Global Variables: IIFEs help in avoiding global variables by creating a new scope.
Encapsulation: Encapsulate code to create private variables and functions.
Initialization: Useful for initializing variables and executing setup code.

// prototype
prototypes are a fundamental concept that allows objects to inherit properties and methods from other objects. 
Every JavaScript object has a prototype, which is another object from which it inherits properties and methods.

Understanding Prototypes
1. Prototype Property: Every function in JavaScript has a prototype property, 
which is an object that is used to build the __proto__ property of instances created with that function.
2. __proto__ Property: Every object has an internal __proto__ property that points to its prototype.

Example of Using Prototypes
Defining a Constructor Function and Adding Methods to Its Prototype
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Adding a method to the prototype
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

// Creating instances of Person
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith

Prototype Chain
When you access a property or method on an object, JavaScript first looks for that property or method on the object itself. 
If it doesn't find it, it looks at the object's prototype, and so on, up the prototype chain.
console.log(person1.toString()); // Output: [object Object]
// `toString` is not defined on person1, so JavaScript looks up the prototype chain to find it on Object.prototype

Modifying Prototypes
You can add properties and methods to an existing prototype, 
which will be available to all instances that inherit from that prototype.
Person.prototype.greet = function() {
    return "Hello, " + this.firstName;
};

console.log(person1.greet()); // Output: Hello, John
console.log(person2.greet()); // Output: Hello, Jane

Checking Prototypes
You can check an object's prototype using the isPrototypeOf method or the instanceof operator.
console.log(Person.prototype.isPrototypeOf(person1)); // Output: true
console.log(person1 instanceof Person); // Output: true

// Prototypal inheritance
Prototypal inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects. 
This is achieved through the prototype chain, 
where objects can have a prototype object from which they inherit properties and methods.

How Prototypal Inheritance Works
1. Prototype Chain: When you access a property or method on an object, JavaScript first looks for that property or method on the object itself. 
If it doesn't find it, it looks at the object's prototype, and so on, up the prototype chain.
2. __proto__ Property: Every object has an internal __proto__ property that points to its prototype.
3. Constructor Functions: Constructor functions can be used to create objects with shared properties and methods through their prototypes.

Example of Prototypal Inheritance
Defining a Constructor Function and Adding Methods to Its Prototype
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

// Creating instances of Person
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

console.log(person1.getFullName()); // Output: John Doe
console.log(person2.getFullName()); // Output: Jane Smith

Creating a Subclass Using Prototypal Inheritance
You can create a subclass by setting the prototype of the subclass constructor to an instance of the superclass.

function Employee(firstName, lastName, jobTitle) {
    Person.call(this, firstName, lastName); // Call the Person constructor
    this.jobTitle = jobTitle;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add a method to Employee
Employee.prototype.getJobDescription = function() {
    return this.getFullName() + " is a " + this.jobTitle;
};

// Creating instances of Employee
const employee1 = new Employee("Alice", "Johnson", "Software Engineer");
const employee2 = new Employee("Bob", "Brown", "Project Manager");

console.log(employee1.getFullName()); // Output: Alice Johnson
console.log(employee1.getJobDescription()); // Output: Alice Johnson is a Software Engineer
console.log(employee2.getFullName()); // Output: Bob Brown
console.log(employee2.getJobDescription()); // Output: Bob Brown is a Project Manager

// This Call Apply Bind
In JavaScript, this, call, apply, and bind are important concepts and methods used to control the context (this value) in which a function is executed.

this Keyword
The this keyword refers to the object that is currently executing the function. 
Its value depends on how the function is called.

call Method
The call method allows you to call a function with a specified this value and arguments provided individually.

function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); // Output: Hello, Alice!

apply Method
The apply method is similar to call, but it takes an array of arguments instead of listing them individually.
function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Alice" };

greet.apply(person, ["Hello", "!"]); // Output: Hello, Alice!

bind Method
The bind method creates a new function that, when called, has its this value set to the provided value, 
with a given sequence of arguments preceding any provided when the new function is called.
function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Alice" };

const greetPerson = greet.bind(person);
greetPerson("Hello", "!"); // Output: Hello, Alice!

Example of Using this, call, apply, and bind
const person1 = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

const person2 = { name: "Jane" };

// Using `this` in a method
person1.greet(); // Output: Hello, John

// Using `call` to change `this`
person1.greet.call(person2); // Output: Hello, Jane

// Using `apply` to change `this`
person1.greet.apply(person2); // Output: Hello, Jane

// Using `bind` to create a new function with `this` bound to `person2`
const greetJane = person1.greet.bind(person2);
greetJane(); // Output: Hello, Jane

// Pure and Impure functions
In JavaScript, functions can be categorized as pure or impure based on their behavior and side effects.

Pure Functions
A pure function is a function that:

1. Given the same input, always returns the same output.
2. Has no side effects (does not modify any external state or variables).

Characteristics of Pure Functions
Deterministic: Always produces the same result for the same input.
No Side Effects: Does not alter any external state or variables.

Example of a Pure Function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (always the same output for the same input)

Impure Functions
An impure function is a function that:

1. May return different outputs for the same input.
2. Has side effects (modifies external state or variables).

Characteristics of Impure Functions
Non-Deterministic: May produce different results for the same input.
Side Effects: Alters external state or variables.

Example of an Impure Function
let counter = 0;

function incrementCounter() {
    counter++;
    return counter;
}

console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2 (different output for the same input)

Benefits of Pure Functions
Predictability: Easier to understand and predict the behavior of pure functions.
Testability: Easier to test since they always produce the same output for the same input.
Composability: Can be easily composed to build more complex functions.

// closures
In JavaScript, a closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
Closures are created whenever a function is defined inside another function, allowing the inner function to access the outer function's variables.

How Closures Work
When a function is defined inside another function, it forms a closure. 
The inner function has access to the variables and parameters of the outer function, even after the outer function has finished executing.

Example of a Closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    };
}

const newFunction = outerFunction("outside");
newFunction("inside");
// Output:
// Outer Variable: outside
// Inner Variable: inside

Practical Uses of Closures
Data Privacy
Closures can be used to create private variables that cannot be accessed from outside the function.

function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount());  // Output: 1

Function Factories
Closures can be used to create functions with preset arguments.
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15