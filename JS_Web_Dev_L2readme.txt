// JS Part 4 (Web Dev Lv 2)
// DOM Manipulation
// Array.filter()




// Dom Manipulation - DOM (Document Object Model) manipulation in JavaScript refers to the process of dynamically changing the content, 
// structure, and style of a web page. 
// The DOM represents the HTML document as a tree structure where each node is an object representing a part of the document.

//change karne ka poore process mein
// selection
// Selecting Elements: Using methods like getElementById, getElementsByClassName, getElementsByTagName, 
// querySelector, and querySelectorAll to select elements.
var home = document.querySelector('#home');

// css change
// Changing Styles: Modifying the CSS styles of elements using the style property.
home.style.color = 'Black';
//home.style.backgroundColor = 'grey';

// html change and text change
// Changing Content: Modifying the text or HTML content of elements using properties like innerText, 
// innerHTML, and textContent.
// home.innerHTML = '<i>Home Lander</i>';

// home.innerText = 'Home Alone';
// home.textContent = 'Homeies';

// adding listeners
In JavaScript, event listeners are used to execute a function when a specific event occurs on an element. 
You can add event listeners to elements using the addEventListener method.
Syntax: element.addEventListener(event, function, useCapture);
Common Events: "click", "mouseover", "mouseout", "keydown", "keyup", etc.


home.addEventListener('mouseenter', function(){
    home.style.color='Red';
})

home.addEventListener('mouseleave', function(){
    home.style.color='Black';
})

// Array.filter()
The array.filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. 
It does not modify the original array.
Syntax
array.filter(callback(element, index, array), thisArg);

callback: A function that is called for each element in the array. It takes three arguments:
    element: The current element being processed in the array.
    index (optional): The index of the current element being processed.
    array (optional): The array filter was called upon.
thisArg (optional): Value to use as this when executing the callback.