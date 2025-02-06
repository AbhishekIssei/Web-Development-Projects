// Merge Sort
// Problem Statement: Give an array of integers, sort an array.
// consr arr = [ -6, 20, 8, -2 , 4]
// bubbleSort(arr) => Should return [-4, -2, 1, 2, 4, 5]

// The function works by recursively dividing the array into two halves, sorting each half, 
// and then merging the sorted halves back together. 
// The merge function is used to merge two sorted arrays into a single sorted array. 
// The process is repeated until the entire array is sorted.

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    let sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
    
}

const arr = [8 ,20, -2, 4, -6]
console.log(mergeSort(arr)) // [-6, -2, 4, 8, 20]


// 1. Define a function mergeSort that takes an array arr as a parameter.
// 2. If the length of arr is less than or equal to 1, return arr (base case).
// 3. Calculate the middle index mid of arr.
// 4. Split arr into two halves: left (from the start to mid) and right (from mid to the end).
// 5. Recursively call mergeSort on the left array and the right array.
// 6. Define a function merge that takes two sorted arrays leftArr and rightArr as parameters.
// 7. Initialize an empty array sortedArr.
// 8. While both leftArr and rightArr are not empty:
//      If the first element of leftArr is less than the first element of rightArr, remove the first element from leftArr and add it to sortedArr.
//      Otherwise, remove the first element from rightArr and add it to sortedArr.
// 9. Concatenate any remaining elements of leftArr and rightArr to sortedArr.
// 10.Return sortedArr.
// 11.Return the result of merging the sorted left and right arrays.

// Big-O = O(nlogn)