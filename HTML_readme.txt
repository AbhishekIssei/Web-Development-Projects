what is Html? 
tags
h1 - h6, p , b, ,i ,sup, ol, ul, li
img a  attributes
form , inputs
div id class

HTML (HyperText Markup Language) is the standard markup language used to create web pages. 
It provides the structure of a webpage by using various elements and tags to define content such as headings, paragraphs, links, images, and other multimedia. 
HTML elements are represented by tags, which are written using angle brackets. 
For example, <p> is a tag used to define a paragraph.

Tags - In HTML, tags are used to define elements within a webpage. 
Tags are enclosed in angle brackets, and they usually come in pairs: an opening tag and a closing tag. 
The content between these tags is the element's content. 
For example: <p>This is a paragraph.</p>

Paragraphs - In HTML,  paragraphs are used to define elements
that contain text. 
<p>This is a paragraph</p>

Headings - In HTML, headings are used to define elements that contain heading information.
h1 - h6 are used to define headings of different levels.
<h1>This is a heading</h1>
<h2>This is a subheading</h2>
<h3>This is a sub-subheading</h3>
<h4>This is a sub-sub-subheading</h4>
<h5>This is a sub-sub-sub-subheading</h5>
<h6>This is a sub-sub-sub-sub-subheading</h6>

Bold - In HTML, bold is used to define elements that contain bold text.
<b>This is bold text</b>

Italic - In Html, the <i> tag is used to define italic text. 
It is typically used to emphasize a section of text.
<i>This is italic text</i>

Superscript & subscript - In HTML, the <sub> and <sup> tags are used to define subscript and superscript text.

The <sub> tag is used to display text as subscript, which appears slightly below the normal line of text. 
It is often used in chemical formulas or mathematical expressions.
<p>H<sub>2</sub>O is the chemical formula for water.</p>

The <sup> tag is used to display text as superscript, which appears slightly above the normal line of text.
It is often used for exponents or ordinal indicators.
<p>E = mc<sup>2</sup></p>

List - In HTML, lists are used to group related items.
There are two types of lists: ordered and unordered lists.

Ordered List (<ol>): Used to create a list of items with a specific order. 
Each item is defined with the <li> tag.
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

Unordered List (<ul>): Used to create a list of items without a specific order. 
Each item is defined with the <li> tag.
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

Links - In HTML, links are created using the <a> (anchor) tag. 
The href attribute specifies the URL of the page the link goes to.
<a href="https://www.example.com">Visit Example</a>

Break - In HTML, the <br> tag is used to insert a line break. 
It is an empty tag, meaning it does not have a closing tag.
<p>This is the first line.<br>This is the second line.</p>

Form - In HTML, forms are used to collect user input. 
The <form> tag is used to create an HTML form for user input. 
Inside the form, various input elements can be used to collect different types of data.

<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    
    <input type="submit" value="Submit">
</form>

Input - In HTML, the <input> tag is used to create various types of input fields within a form. 
The type attribute specifies the type of input field.
Common input types:

text: Single-line text input.
password: Password input (characters are masked).
email: Email input.
number: Numeric input.
checkbox: Checkbox input.
radio: Radio button input.
submit: Submit button.
reset: Reset button.
button: General button.
date: Date input.
file: File upload input.

Division - In HTML, the <div> tag is used to define a division or a section in an HTML document. 
It is a block-level element that is often used as a container for other HTML elements to style them with CSS or to perform certain tasks with JavaScrip
<div>
    <h2>This is a heading inside a div</h2>
    <p>This is a paragraph inside a div.</p>
</div>

id - id Attribute: Specifies a unique identifier for an HTML element. 
The value of the id attribute must be unique within the document. 
It is often used to apply specific styles or to manipulate the element with JavaScript.
<div id="main-content">
    <h2>This is a heading inside a div</h2>
    <p>This is a paragraph inside a div.</p>
</div>

class - Specifies one or more class names for an HTML element. 
Multiple elements can share the same class name, allowing you to apply the same styles to multiple elements.
<div class="content-section">
    <h2>This is a heading inside a div</h2>
    <p>This is a paragraph inside a div.</p>
</div>
<div class="content-section">
    <h2>This is another heading inside a div</h2>
    <p>This is another paragraph inside a div.</p>
</div>