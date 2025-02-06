// Fibonacci Sequence with Recursion

function recursiveFibonacci(n) {
    // Base Case: n < 2,  return n
    if (n < 2) {
      return n
    }
    // Recursive Case: recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
  }
  
  console.log(recursiveFibonacci(0)) // 0
  console.log(recursiveFibonacci(1)) // 1
  console.log(recursiveFibonacci(7)) // 8

  // O(n) - Iterative
  // O(2^n) - Recursive