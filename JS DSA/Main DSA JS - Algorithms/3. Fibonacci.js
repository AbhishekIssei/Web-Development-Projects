// Fibonacci Sequence
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. 
// // Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
  }
  
  console.log(fibonacci(2)) // [0,1]
  console.log(fibonacci(3)) // [0,1,1]
  console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

   // Big-O = O(n)