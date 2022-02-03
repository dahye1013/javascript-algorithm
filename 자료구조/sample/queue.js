/**
 * NORMAL
 */

{
  class Queue {
    consturctor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
    }

    enqueue(value) {
      this.queue[this.rear++] = value;
    }

    dequeue() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
      return value;
    }

    peek() {
      return this.queue[this.front];
    }

    size() {
      return this.rear - this.front;
    }
  }
}
/**
 * LINKED LIST
 */
{
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor(value) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    enqueue(newValue) {
      const newNode = new Node(newValue);
      if (this.head === null) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size += 1;
    }

    dequeue() {
      const value = this.head.value;
      this.head = this.head.next;
      this.size -= 1;
      return value;
    }

    peek() {
      return this.head.value;
    }
  }
}
