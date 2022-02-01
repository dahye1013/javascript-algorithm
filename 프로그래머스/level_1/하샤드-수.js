/**
 * 하샤드 수
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12947
 */

function solution(x) {
  const arr = x.toString().split("");
  const sum = arr.reduce(
    (acc, cur) => Number.parseInt(acc) + Number.parseInt(cur),
    0
  );
  return x % sum === 0;
}
