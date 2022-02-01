/**
 * 정수 제곱근 판별
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12934
 */

function solution(n) {
  let num = 1;
  while (Math.pow(num, 2) <= n) {
    if (Math.pow(num, 2) === n) return Math.pow(num + 1, 2);
    num++;
  }

  return -1;
}
