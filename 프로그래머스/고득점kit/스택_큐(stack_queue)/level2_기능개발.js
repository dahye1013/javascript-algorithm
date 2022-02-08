/**
 * 기능개발
 * ref: https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript
 */

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(val) {
    this.queue.push(val);
  }
  dequeue() {
    const temp = this.queue[0];
    delete this.queue.shift();
    return temp;
  }
  peek() {
    return this.queue[0] || { idx: -1 };
  }
  size() {
    return this.queue.length;
  }
}

function solution(progresses, speeds) {
  let answer = [];
  let queue = new Queue();

  for (let index = 0; index < progresses.length; index++) {
    queue.enqueue({ value: progresses[index], idx: index });
  }

  while (queue.size !== 0) {
    let count = 0;

    progresses.forEach((el, i) => {
      progresses[i] += speeds[i];
      if (progresses[i] >= 100 && queue.peek().idx === i) {
        queue.dequeue();
        count++;
      }
    });

    if (count) answer.push(count);
  }
  return answer;
}
