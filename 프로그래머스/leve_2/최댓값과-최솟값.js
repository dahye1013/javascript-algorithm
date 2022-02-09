/**
 * 최댓값과 최솟값
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12939
 */

function solution(s) {
  return s
    .split(" ")
    .reduce(
      (acc, cur) => {
        if (+cur < +acc[0]) {
          acc[0] = cur;
        }
        if (+cur > +acc[2]) {
          acc[2] = cur;
        }
        return acc;
      },
      //최소값, 최대값
      [Number.MAX_SAFE_INTEGER, " ", Number.MIN_SAFE_INTEGER]
    )
    .join("");
}

/**
 * [Refactoring Version 1]
 * - 내장 함수 Math 사용하여 수정
 */
function solution(s) {
  const arr = s.split(" ");
  return [Math.min(...arr), " ", [Math.max(...arr)]].join("");
}
