/**
 * 내적
 * https://programmers.co.kr/learn/courses/30/lessons/70128
 */
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
