/**
 * 자릿수 더하기
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12931
 */

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0);
}
