class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let cur = this.head;
    console.log(value);
    while (cur.value !== value) {
      if (cur.next === null) throw new Error("Does not exist");
      cur = cur.next;
    }

    return cur;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, value) {
    const newNode = new Node(value);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let preNode = this.head;
    console.log(preNode.next.value);
    while (preNode.next.value !== value) {
      preNode = preNode.next;
    }
    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }

  display() {
    let curNode = this.head;
    let displayArr = [];
    while (curNode !== null) {
      displayArr.push(curNode.value);
      curNode = curNode.next;
    }

    const result = displayArr.join(", ");
    console.log(result);
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(3);
linkedList.append(5);
linkedList.append(7);
linkedList.display(); //1, 3, 5, 7
linkedList.remove(3);
linkedList.display(); //1, 5, 7

//linkedList.find(12); // Does not Exist
const node1 = linkedList.find(1);
linkedList.insert(node1, 12);
linkedList.display(); //1, 12, 5, 7 ​​​​​
