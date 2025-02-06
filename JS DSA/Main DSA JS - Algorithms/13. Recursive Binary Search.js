// Recursive Binary Search
// Problem - Give a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. 
// Return -1 if the target element is not found

// 1. Define a function recursiveBinarySearch that takes a sorted array arr and a target element target as parameters.
// 2. Call a helper function search with parameters arr, target, leftIndex set to 0, and rightIndex set to the length of arr minus 1.
// 3. Define the helper function search that takes arr, target, leftIndex, and rightIndex as parameters:
//      If leftIndex is greater than rightIndex, return -1.
//      Calculate middleIndex as the floor of the sum of leftIndex and rightIndex divided by 2.
//      If arr[middleIndex] is equal to target, return middleIndex.
//      If arr[middleIndex] is greater than target, recursively call search with rightIndex set to middleIndex minus 1.
//      Otherwise, recursively call search with leftIndex set to middleIndex plus 1.
// 4. Return the result of the search function.

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
  }
  
  function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
      return -1
    }
  
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
      return middleIndex
    }
  
    if (target < arr[middleIndex]) {
      return search(arr, target, leftIndex, middleIndex - 1)
    } else {
      return search(arr, target, middleIndex + 1, rightIndex)
    }
  }
  
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1

  // Big-O = O(logn)