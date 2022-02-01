/**
 * 자연수 뒤집어 배열로 만들기
 * ref : https://programmers.co.kr/learn/courses/30/lessons/12932
 *
 */

function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((x) => +x);
}
