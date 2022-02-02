/**
 * 문자열 다루기 기본
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12918
 */
function solution(s) {
  const arr = s.split("");
  const isNumber = (n) => !Number.isNaN(+n) || n === 0;

  if (!(arr.length === 4 || arr.length === 6)) return false;
  return arr.every((el) => isNumber(el));
}
