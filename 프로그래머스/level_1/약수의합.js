/**
 * 약수의 합
 * https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
 */
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b);
}

/**
 * [Refactoring Version 1] - 실패
 * -> 시간 효율성에서 떨어짐. 위와 같은 O(n^2)라고 생각했는데...
 * -> reduce할때 물론 배열의 크기가 달라지지만,
 *
 */

function solution(n) {
  return Array.from(Array(n), (_, i) => (n % (i + 1) === 0 ? i + 1 : 0)).reduce(
    (a, b) => a + b
  );
}
