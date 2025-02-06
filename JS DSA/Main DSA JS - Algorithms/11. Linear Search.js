// Linear Search Algorithm
// Problem - Give an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the targetn
// element is not found

// 1. Define a function linearSearch that takes an array arr and a target element target as parameters.
// 2. Loop through each element in the array arr using a for loop:
//      Initialize a loop variable i to 0.
//      Continue the loop while i is less than the length of arr.
//      Increment i by 1 after each iteration.
// 3. Inside the loop, check if the current element arr[i] is equal to target:
// If true, return the current index i.
// 4. If the loop completes without finding the target, return -1.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i
      }
    }
    return -1
  }
  
  console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
  console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // 4
  console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1

  // Big-O = O(n)