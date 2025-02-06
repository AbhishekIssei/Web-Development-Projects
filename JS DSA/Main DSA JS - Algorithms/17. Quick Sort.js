// Quick Sort
// Problem Statement: Give an array of integers, sort an array.
// consr arr = [ -6, 20, 8, -2 , 4]
// bubbleSort(arr) => Should return [-4, -2, 1, 2, 4, 5]

// The function works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays, 
// according to whether they are less than or greater than the pivot. 
// The sub-arrays are then sorted recursively. 
// The process is repeated until the entire array is sorted.

function quickSort(arr) {
    if (arr.length <2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left =[]
    let right = []
    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }

    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [8 ,20, -2, 4, -6]
console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]

// 1. Define a function quickSort that takes an array arr as a parameter.
// 2. If the length of arr is less than 2, return arr (base case).
// 3. Select the last element of arr as the pivot.
// 4. Initialize two empty arrays: left and right.
// 5. Loop through each element in arr except the pivot:
//      If the current element is less than the pivot, add it to the left array.
//      Otherwise, add it to the right array.
// 6. Recursively call quickSort on the left array and the right array.
// 7. Concatenate the sorted left array, the pivot, and the sorted right array, and return the result.