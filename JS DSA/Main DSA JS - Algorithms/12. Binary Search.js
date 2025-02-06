// Binary Search 
// Problem - Give a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the targetn
// element is not found

// 1. Define a function binarySearch that takes a sorted array arr and a target element target as parameters.
// 2. Initialize leftIndex to 0 and rightIndex to the length of arr minus 1.
// 3. While leftIndex is less than or equal to rightIndex:
//      Calculate middleIndex as the floor of the sum of leftIndex and rightIndex divided by 2.
//      If arr[middleIndex] is equal to target, return middleIndex.
//      If arr[middleIndex] is greater than target, set rightIndex to middleIndex minus 1.
//      Otherwise, set leftIndex to middleIndex plus 1.
// 4. If the loop completes without finding the target, return -1.

function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
  
    while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
      if (target === arr[middleIndex]) {
        return middleIndex
      }
      if (target < arr[middleIndex]) {
        rightIndex = middleIndex - 1
      } else {
        leftIndex = middleIndex + 1
      }
    }
    return -1
  }
  
  console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
  console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
  console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1

  // Big-O = O(logn)