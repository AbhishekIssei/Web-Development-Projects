// Cartesian Product
// Problem - Given two finite non sets, find their cartesian product

// The Cartesian Product of two sets is a mathematical operation that returns a set of all possible ordered pairs (tuples) 
// where the first element of each pair is from the first set and the second element is from the second set.

// For example, if you have two sets:

// Set A = [1, 2]
// Set B = {3, 4}
// The Cartesian Product of Set A and Set B, denoted as A × B, would be:
// A × B = {(1, 3), (1, 4), (2, 3), (2, 4)}

// const A = [1,2]
// const B = [3,4]
// A X B = [[1,3],[1,4],[2,3],[2,4]]
// const C = [1,2]
// const D = [3,4,5]
// C X D = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]

function cartesianProduct(arr1, arr2){
    const result = []
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            result.push([arr1[i], arr2[j]])
        }
    }

    return result
}
const arr1 = [1,2]
const arr2 = [3,4]
console.log(cartesianProduct(arr1, arr2)) // Output: [[1,3],[1,4],[2,3],[2,4]]

// Big-O = O(mn)