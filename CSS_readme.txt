#CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. 
CSS defines how elements should be rendered on screen, on paper, or in other media.

CSS can be included in HTML documents in three ways:

#Inline CSS: Using the style attribute inside HTML elements.
#Internal CSS: Using the <style> tag inside the <head> section of the HTML document.
#External CSS: Linking to an external CSS file using the <link> tag.
<link rel="stylesheet" href="styles.css">

Basic Syntax
A CSS rule consists of a selector and a declaration block:
selector {
    property: value;
}

/* This is a comment */
body {
    background-color: lightblue;
}

h1 {
    color: navy;
    margin-left: 20px;
}

#Styling text
In CSS, you can style text using various properties. 
Here are some common text styling properties:

#Color
Sets the color of the text.
color: blue;

#Font Family
Specifies the font of the text.
font-family: Arial, sans-serif;

#Font Size
Sets the size of the text.
font-size: 16px;

#Font Weight
Sets the weight (boldness) of the text.
font-weight: bold;

#Font Style
Sets the style of the text (e.g., italic).
font-style: italic;

#Text Align
Specifies the horizontal alignment of the text.
text-align: center;

#Text Decoration
Adds decoration to the text (e.g., underline).
text-decoration: underline;

#Line Height
Sets the height of the lines of text.
line-height: 1.5;

#Text Transform
Controls the capitalization of the text.
text-transform: uppercase;

p {
    color: blue;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    text-decoration: underline;
    line-height: 1.5;
    text-transform: uppercase;
}

#Selectors
Element Selector: Selects all elements of a given type.
p {
    color: red;
}

#ID Selector: Selects an element with a specific id.
#main-content {
    background-color: yellow;
}

#Class Selector: Selects all elements with a specific class.
.content-section {
    border: 1px solid black;
}

#Properties

Color: Sets the color of text.
color: blue;

Background Color: Sets the background color of an element.
background-color: lightgray;

Margin: Sets the margin outside the element.
margin: 10px;

Padding: Sets the padding inside the element.
padding: 10px;

Border: Sets the border around the element.
border: 1px solid black;

#Position Properties in CSS

Position Absolute: In CSS, the position property is used to specify the positioning method for an element. 
The absolute value positions an element relative to its nearest positioned ancestor (an ancestor with a position other than static). 
If no such ancestor exists, it is positioned relative to the initial containing block (usually the <html> element).

HTML
<div class="container">
    <div class="box">This is an absolutely positioned box.</div>
</div>

CSS
.container {
    position: relative;
    width: 300px;
    height: 200px;
    border: 1px solid black;
}

.box {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 100px;
    height: 100px;
    background-color: lightblue;
}

In CSS, the position: relative property positions an element relative to its normal position. 
The element's original space is preserved in the document flow, but it can be offset using the top, right, bottom, and left properties.

HTML
<div class="container">
    <div class="box">This is a relatively positioned box.</div>
</div>

CSS
.container {
    position: relative;
    width: 300px;
    height: 200px;
    border: 1px solid black;
}

.box {
    position: relative;
    top: 20px;
    left: 30px;
    width: 100px;
    height: 100px;
    background-color: lightblue;
}

#Display Flex - In CSS, the display: flex property is used to define a flex container. 
This enables a flex context for all its direct children, allowing them to be laid out using the Flexbox model.

<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>

<style>
.container {
    display: flex;
    flex-direction: row; /* row, row-reverse, column, column-reverse */
    justify-content: space-between; /* flex-start, flex-end, center, space-between, space-around, space-evenly */
    align-items: center; /* stretch, flex-start, flex-end, center, baseline */
    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
}

.item {
    flex: 1; /* flex-grow, flex-shrink, flex-basis */
    margin: 10px;
    background-color: lightblue;
    padding: 20px;
    text-align: center;
}
</style>

Explanation
display: flex: Defines the container as a flex container.
flex-direction: Specifies the direction of the main axis (row, row-reverse, column, column-reverse).
justify-content: Aligns the flex items along the main axis.
align-items: Aligns the flex items along the cross axis.
flex-wrap: Specifies whether the flex items should wrap or not.

In this example, the .container is a flex container with three flex items. 
The items are spaced evenly, centered along the cross axis, and can wrap if necessary. 
Each item is flexible and will grow to fill the available space.

#Box-sizing - In CSS, the box-sizing property is used to alter the default CSS box model used to calculate widths and heights of elements. 
It can make it easier to work with elements' sizes by including padding and border in the element's total width and height.

content-box: This is the default value. The width and height properties include only the content. Padding, border, and margin are not included.
border-box: The width and height properties include the content, padding, and border, but not the margin.

* {
    box-sizing: border-box;
}

#Gap - In CSS, the gap property is used to define the spacing between items in a flex or grid container. 
It is a shorthand for row-gap and column-gap.

.container {
    display: flex;
    gap: 20px; /* Sets a 20px gap between flex items */
}

.item {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
}

#Text-transform - In CSS, the text-transform property is used to control the capitalization of text. 
It can be used to make text appear in uppercase, lowercase, or capitalize the first letter of each word.

text-transform: none: The text remains as it is.
text-transform: capitalize: The first letter of each word is capitalized.
text-transform: uppercase: All letters are transformed to uppercase.
text-transform: lowercase: All letters are transformed to lowercase.

#Object-fit, object-cover - In CSS, the object-fit property is used to specify how an <img> or <video> should be resized to fit its container. 
The object-fit property can take several values, including cover and contain.

fill: This is the default value. The replaced content is sized to fill the element's content box. 
The entire object will completely fill the box.
contain: The content is scaled to maintain its aspect ratio while fitting within the element's content box.
cover: The content is scaled to maintain its aspect ratio while filling the element's content box. 
The object will be clipped to fit.
none: The content is not resized.
scale-down: The content is sized as if none or contain were specified, whichever would result in a smaller concrete object size.

.container {
    width: 300px;
    height: 200px;
    border: 1px solid black;
    overflow: hidden;
}

.img-fill {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

.img-contain {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

object-fit: fill: The image will stretch to fill the container, possibly distorting the aspect ratio.
object-fit: contain: The image will scale to fit the container while maintaining its aspect ratio, leaving empty space if necessary.
object-fit: cover: The image will scale to cover the entire container while maintaining its aspect ratio, cropping the image if necessary.

#object-position: In CSS, the object-position property is used to specify the alignment of the content within a replaced element, such as an <img> or <video>, when the object-fit property is used. 
It allows you to control which part of the content is visible when it is resized.

Syntax
object-position: x y;

x: Horizontal position (e.g., left, center, right, or a percentage).
y: Vertical position (e.g., top, center, bottom, or a percentage).

.container {
    width: 300px;
    height: 200px;
    border: 1px solid black;
    overflow: hidden;
}

.img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center; /* Center the image */
}

.img-top-left {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left; /* Align the image to the top-left corner */
}

.img-bottom-right {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom right; /* Align the image to the bottom-right corner */
}

object-position: center center: Centers the image within the container.
object-position: top left: Aligns the image to the top-left corner of the container.
object-position: bottom right: Aligns the image to the bottom-right corner of the container.

#line-height, letter-spacing, word-spacing: In CSS, the line-height, letter-spacing, and word-spacing properties are used to control the spacing in text.

#line-height
The line-height property sets the height of a line box. 
It is commonly used to set the distance between lines of text.

p {
    line-height: 1.5; /* 1.5 times the font size */
}

#letter-spacing
The letter-spacing property sets the space between characters in a text.

p {
    letter-spacing: 2px; /* Adds 2px space between characters */
}

#word-spacing
The word-spacing property sets the space between words in a text.

p {
    word-spacing: 5px; /* Adds 5px space between words */
}

line-height: Controls the height of each line of text, making the text more readable by increasing or decreasing the space between lines.
letter-spacing: Adjusts the space between characters, which can improve readability or achieve a specific design effect.
word-spacing: Adjusts the space between words, which can also improve readability or achieve a specific design effect.

#background-image, background-size, background-position: In CSS, the background-image, background-size, and background-position properties are used to control the background image of an element.

#background-image
The background-image property sets one or more background images for an element.

body {
    background-image: url('background.jpg');
}

#background-size
The background-size property specifies the size of the background images.

auto: Default value. The background image is displayed at its original size.
cover: Scales the background image to be as large as possible so that the background area is completely covered by the background image, while maintaining the image's aspect ratio.
contain: Scales the background image to be as large as possible while ensuring both its width and height fit within the background positioning area.
length: Sets the width and height of the background image (e.g., 100px 200px).
percentage: Sets the width and height of the background image in percentage of the containing element (e.g., 50% 50%).

body {
    background-image: url('background.jpg');
    background-size: cover;
}

#background-position
The background-position property sets the starting position of a background image.

left top: Aligns the background image to the top-left corner.
center center: Centers the background image.
right bottom: Aligns the background image to the bottom-right corner.
length: Specifies the position in length units (e.g., 10px 20px).
percentage: Specifies the position in percentage of the containing element (e.g., 50% 50%).

body {
    background-image: url('background.jpg');
    background-size: cover;
    background-position: center center;
}

background-image: Sets the background image of an element.
background-size: Controls the size of the background image.
background-position: Controls the position of the background image within the element.

#:nth-child - In CSS, the :nth-child() pseudo-class is used to select elements based on their position in a group of siblings. 
It can take a variety of arguments to match different patterns of elements.

Syntax
element:nth-child(n)
n can be a number, keyword, or formula.

/* Selects every 2nd child */
li:nth-child(2n) {
    background-color: lightblue;
}

/* Selects the 3rd child */
li:nth-child(3) {
    background-color: lightgreen;
}

/* Selects every 3rd child, starting from the 1st */
li:nth-child(3n+1) {
    background-color: lightcoral;
}

odd: Selects odd-numbered children.
even: Selects even-numbered children.

/* Selects odd-numbered children */
li:nth-child(odd) {
    background-color: lightyellow;
}

/* Selects even-numbered children */
li:nth-child(even) {
    background-color: lightgray;
}

:nth-child(2n): Selects every 2nd child (2nd, 4th, 6th, etc.).
:nth-child(3): Selects the 3rd child.
:nth-child(3n+1): Selects every 3rd child, starting from the 1st (1st, 4th, 7th, etc.).
:nth-child(odd): Selects odd-numbered children (1st, 3rd, 5th, etc.).
:nth-child(even): Selects even-numbered children (2nd, 4th, 6th, etc.).