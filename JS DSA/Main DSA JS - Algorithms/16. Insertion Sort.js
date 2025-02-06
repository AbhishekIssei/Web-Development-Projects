// Insertion Sort

// The function iterates through the array, starting from the second element, and for each element, 
// it places it in its correct position relative to the already sorted portion of the array. 
// The process is repeated until the entire array is sorted.

// Psuedocode
// 1. Define a function insertionSort that takes an array arr as a parameter.
// 2. Loop through each element in the array starting from the second element (index 1):
//      Initialize a variable key to the current element.
//      Initialize a variable j to the index of the previous element (i - 1).
// 3. While j is greater than or equal to 0 and arr[j] is greater than key:
//      Move arr[j] to the position j + 1.
//      Decrement j by 1.
// 4. Place key at the position j + 1.
// 5. Repeat steps 2-4 for all elements in the array.
// 6. Return the sorted array.

// Problem Statement: Give an array of integers, sort an array.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let numberToInsert = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > numberToInsert) {
        arr[j + 1] = arr[j]
        j = j - 1
      }
      arr[j + 1] = numberToInsert
    }
  }
  
  const arr = [8, 20, -2, 4, -6]
  insertionSort(arr)
  console.log(arr) // [-6, -2, 4, 8, 20]

  // Big-O = O(n^2)