/**
 * 같은 숫자는 싫어
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
 */

function solution(arr) {
  return arr.reduce((acc, cur, i, arr) => {
    if (cur !== arr[i - 1]) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
