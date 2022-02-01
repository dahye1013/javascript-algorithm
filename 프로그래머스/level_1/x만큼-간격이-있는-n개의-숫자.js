/**
 * x만큼 간격이 있는 n개의 숫자
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12954
 */

function solution(x, n) {
  return Array.from(Array(n).fill(x), (x, i) => x * (i + 1));
}
