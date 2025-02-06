// Power of Two
// Give a positive integer 'n', determine if the number is a power of 2 or no
// An integer is a power of two if there exists an integer 'x' such that 'n' ===2^x
// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(16) = true (2^4)
// isPowerOfTwo(18) = false

// Pseudocode
// n = 8
// 8/2 = 4 (remaider 0)
// 4/2 = 2 (remainder 0)
// 2/2 = 1 (remainder 0)
// if remainder is not 0 in any step,'n' is not a power of two
function isPowerOfTwo(n) {
    if (n < 1) {
      return false
    }
    while (n > 1) {
      if (n % 2 !== 0) {
        return false
      }
      n = n / 2
    }
    return true
  }

  // Big-O = O(logn)
  
  function isPowerOfTwoBitWise(n) {
    if (n < 1) {
      return false
    }
    return (n & (n - 1)) === 0
  }
  
  console.log(isPowerOfTwo(1)) // true
  console.log(isPowerOfTwoBitWise(2)) // true
  console.log(isPowerOfTwo(5)) // false

  // Big-O = O(1)

// The bitwise method to check if a number is a power of two is efficient and leverages the properties of binary representation. 
// Here's the explanation and the code:

//  Explanation
//  A number ( n ) is a power of two if it has exactly one '1' bit in its binary representation. For example:
  
//  ( 2^0 = 1 ) (binary 0001)
//  ( 2^1 = 2 ) (binary 0010)
//  ( 2^2 = 4 ) (binary 0100)
//  ( 2^3 = 8 ) (binary 1000)
//  The bitwise expression (n & (n - 1)) === 0 works because:
//  Subtracting 1 from a power of two flips all the bits after the rightmost '1' bit, 
//  including the '1' bit itself.
//  Performing a bitwise AND between ( n ) and ( n-1 ) results in 0 if ( n ) is a power of two, 
//  because there are no common '1' bits. 