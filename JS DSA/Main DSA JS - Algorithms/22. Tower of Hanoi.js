// Tower of Hanoi
// The Tower of Hanoi is a classic problem in computer science and mathematics. 
// It involves three rods and a number of disks of different sizes that can slide onto any rod. 
// The puzzle starts with the disks neatly stacked in ascending order of size on one rod,
// the smallest at the top, making a conical shape.

// The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
// No disk may be placed on top of a smaller disk.

// Base Case: If there is only one disk, move it directly from the source rod to the destination rod.
// Recursive Case:
// A = source, B = auxiliary, C = Destination
// If there is only one disk
// Move the top n-1 disks from the A rod to the B rod, using the C rod as a temporary holding area.
// Move the n-th disk (the largest disk) from the A rod to the C rod.
// Move the n-1 disks from the B rod to the C rod, using the A rod as a temporary holding area.

function towerOfHanoi(n, source, destination, auxiliary){
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }
    towerOfHanoi(n - 1, source, auxiliary, destination);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, destination, source);
}

towerOfHanoi( 2, 'A', 'B', 'C')

// Big-O =  O(2^n)