/**
 * 수박수박수박수박수박수?
 * https://programmers.co.kr/learn/courses/30/lessons/12922
 */

function solution(n) {
  const str = "수박";
  const size = Math.round(n / 2);
  return n % 2 === 0 ? str.repeat(size) : str.repeat(size).slice(0, -1);
}
