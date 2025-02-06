// JavaScript Data Structures and Algorithms.

// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). 
// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

// With inbuilt Functions

/*
var isPalindromeNumber = function (x) {
    return x === +x.toString().split('').reverse().join('');
};

const res = isPalindromeNumber(121);
console.log(res); // Output: true
*/
//Optimized

var isPalindrome = function (x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
  };
  
  const res = isPalindrome(10);
  console.log(res);
  
// with Copilot
function isPalindromeNumber(num) {
    // Convert the number to a string
    const str = num.toString();
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    // Check if the original string is equal to the reversed string
    return str === reversedStr;
}

// Example usage:
console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(-121)); // false
console.log(isPalindromeNumber(10)); // false