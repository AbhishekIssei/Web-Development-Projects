// Climbing Staircase
// Problem - Given a Staircase of 'n' steps, count the numbers of disctinct ways to climb to top.
// You can either climb 1 step or 2 steps at a time.

// The Climbing Staircase problem is a classic dynamic programming problem. 
// The goal is to determine the number of distinct ways to climb to the top of a staircase with n steps, 
// where you can either climb 1 step or 2 steps at a time.

// For example:

// If n = 1, there is only 1 way to climb to the top: [1].
// If n = 2, there are 2 ways to climb to the top: [1, 1] and [2].
// If n = 3, there are 3 ways to climb to the top: [1, 1, 1], [1, 2], and [2, 1].

// The problem can be solved using a recursive approach or dynamic programming. 
// The idea is to use the fact that the number of ways to reach the n-th step is the sum of the number of ways to reach 
// the (n-1)-th step and the number of ways to reach the (n-2)-th step.

function climbStaircase(n){
    const noOfWays = [1,2]
    for (let i = 2; i <=  n; i++) {
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
        }
    return noOfWays[n - 1]
}
console.log(climbStaircase(1))
console.log(climbStaircase(2))
console.log(climbStaircase(3))
console.log(climbStaircase(4))

// Big-O = O(n)