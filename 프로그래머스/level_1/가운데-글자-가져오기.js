/**
 * 가운데 글자 가져오기
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12903
 */

function solution(s) {
  const sliceStr = (str, n = 0) =>
    str.slice(str.length / 2 - n, str.length / 2 + 1);
  return s.length % 2 ? sliceStr(s) : sliceStr(s, 1);
}
