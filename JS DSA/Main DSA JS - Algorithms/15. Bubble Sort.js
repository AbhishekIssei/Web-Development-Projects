// Bubble Sort
// The function iterates through the array multiple times, 
// comparing adjacent elements and swapping them if they are in the wrong order. 
// The process is repeated until the array is sorted.

// Problem Statement: Give an array of integers, sort an array.
// consr arr = [ -2, 1, 5, 2 , 4, -4]
// bubbleSort(arr) => Should return [-4, -2, 1, 2, 4, 5]

function bubbleSort(arr) {
    let swapped 
    do {
        swapped = false;
        for(let i=0; i<arr.length - 1; i++) {
            if(arr[i]>=arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped)
}

const arr = [8 ,20, -2, 4, -6]
bubbleSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]

// 1. Define a function bubbleSort that takes an array arr as a parameter.
// 2. Initialize a boolean variable swapped to true.
// 3. Repeat the following steps while swapped is true:
//      Set swapped to false.
//      Loop through each element in the array from the first element to the second-to-last element:
//          If the current element is greater than the next element:
//              Swap the current element with the next element.
//              Set swapped to true.
// 4. Return the sorted array.

//Big-O = O(n^2)