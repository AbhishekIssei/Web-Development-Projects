// Prime Number
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
// In other words, a prime number is a number that can only be divided evenly by 1 and itself.

// Characteristics of Prime Numbers
// Greater than 1: Prime numbers must be greater than 1.
// Divisibility: A prime number has exactly two distinct positive divisors: 1 and the number itself.

// Examples
// The first few prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, etc.
// 2 is the smallest and the only even prime number.
// Numbers like 4, 6, 8, 9, and 10 are not prime because they have divisors other than 1 and themselves.

function isPrime(n) {
    if (n < 2) {
      return false
    }
    //     for (let i = 2; i < n; i++) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      // if n is divisible by any number then it is not prime
      if (n % i === 0) {
        return false
      }
    }
    return true
  }
  
  console.log(isPrime(1)) // false
  console.log(isPrime(5)) // true
  console.log(isPrime(4)) // false

  // Big-O = O(sqrt(n))