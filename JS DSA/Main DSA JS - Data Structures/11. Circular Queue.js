// Circular Queue

// A Circular Queue is a linear data structure that follows the First In First Out (FIFO) principle but connects the end of the queue back to the front, 
// forming a circle. This allows for efficient use of space by reusing the empty slots created by dequeuing elements.

// Key Operations:
// Enqueue: Add an element to the end of the queue.
// Dequeue: Remove an element from the front of the queue.
// isEmpty: Check if the queue is empty.
// isFull: Check if the queue is full.
// Peek: View the front element without removing it.
// Size: Get the number of elements in the queue.
// Print: visualize the elements in the queue

class CircularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.rear = -1;
      this.front = -1;
      this.currentLength = 0;
      this.capacity = capacity;
    }
  
    isFull() {
      return this.currentLength === this.capacity;
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    size() {
      return this.currentLength;
    }
  
    enqueue(item) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = item;
        this.currentLength += 1;
        if (this.front === -1) {
          this.front = this.rear;
        }
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.front];
      }
      return null;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        let i;
        let str = "";
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
          str += this.items[i] + " ";
        }
        str += this.items[i];
        console.log(str);
      }
    }
  }
  
  const queue = new CircularQueue(5);
  console.log(queue.isEmpty());
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  console.log(queue.size());
  queue.print();
  console.log(queue.isFull());
  console.log(queue.dequeue());
  console.log(queue.peek());
  queue.print();
  queue.enqueue(60);
  queue.print();