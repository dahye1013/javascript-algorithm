# Queue

- 선입 선출 (first in first out)
  - 먼저 들어온 것이 먼저 나가는 구조로 줄서기와 같다.
- 선형 자료구조이다.
- Linear queue와 Circular Queue가 존재한다.

![https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/600px-Data_Queue.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/600px-Data_Queue.svg.png)

[Queue (abstract data type) - Wikipedia](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>)

### 구성요소

1. Enqeue : queue 뒤에 요소를 추가
2. Dequeue : queue 앞에 요소를 삭제
3. Peek : front에 위치한 데이터를 읽음
4. Front : queue 맨 앞에 위치한 노드
5. Rear : queue 맨 뒤에 위치한 노드

### 배열을 이용한 Queue 구현

```jsx
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
```

### 연결리스트를 이용한 Queue 구현

```jsx
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
```
