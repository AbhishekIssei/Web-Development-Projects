// Factorial of a number
// The factorial of a number ( n ) (denoted as ( n! )) is the product of all positive integers less than or equal to ( n ). 
// Definition
// Factorial of 0: ( 0! = 1 ) (by definition)
// Factorial of 1: ( 1! = 1 )
// Factorial of ( n ): ( n! = n \times (n-1) \times (n-2) \times \ldots \times 1 )

// // Examples
// ( 0! = 1 )
// ( 1! = 1 )
// ( 2! = 2 \times 1 = 2 )
// ( 3! = 3 \times 2 \times 1 = 6 )
// ( 4! = 4 \times 3 \times 2 \times 1 = 24 )
// ( 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 )

  function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
      result = result * i
    }
    return result
  }
  
  console.log(factorial(0)) // 1
  console.log(factorial(1)) // 1
  console.log(factorial(5)) // 120

  // Big-O = O(n)