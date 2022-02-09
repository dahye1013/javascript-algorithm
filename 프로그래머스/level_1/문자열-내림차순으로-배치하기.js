/**
 * 문자열 내림차순으로 배치하기
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12917
 */

function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      return b.charCodeAt() - a.charCodeAt();
    })
    .join("");
}
