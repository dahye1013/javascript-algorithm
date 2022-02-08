/**
 * 나누어 떨어지는 숫자 배열
 * ref : https://programmers.co.kr/learn/courses/30/lessons/12910
 */

function solution(arr, divisor) {
  return arr
    .reduce((acc, cur, i) => {
      if (cur % divisor === 0) {
        acc.push(cur);
      }
      if (arr.length - 1 === i && acc.length === 0) {
        return [-1];
      }
      return acc;
    }, [])
    .sort((a, b) => a - b);
}
