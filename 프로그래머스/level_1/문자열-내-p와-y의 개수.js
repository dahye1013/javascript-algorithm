/**
 * [문자열 내 p와 y의 개수]
 * https://programmers.co.kr/learn/courses/30/lessons/12916
 */

/**
 * [내 기본 풀이]
 */

function solution(s) {
  return s.split("").reduce(
    (acc, cur, i) => {
      if (cur.toUpperCase() === "P") {
        acc[0] += 1;
      }
      if (cur.toUpperCase() === "Y") {
        acc[1] += 1;
      }
      if (i === s.length - 1) {
        return acc[0] === acc[1];
      }
      return acc;
    },
    [0, 0]
  );
}

/**
 * [Refactoring Version 01]
 * - toUpperCase된 값으로 먼저 정제
 * - p,y에 각 count 값 대신 분기마다 플래그 값 사용
 */
function solution(s) {
  return [...s.toUpperCase()].reduce((acc, cur, i) => {
    if (cur === "P") {
      acc += 1;
    }
    if (cur === "Y") {
      acc += 1;
    }
    if (i === s.length - 1) {
      return acc === 0 ? true : false;
    }
    return acc;
  }, 0);
}

/**
 * [Refactoring Version 02]
 * - 정규식 사용
 * -> 해당 글자 추출 후 length 비교
 * -> 정규식에 대한 결과값이 없을 때, length 0으로 default 처리
 *
 */
function solution(s) {
  return (
    (s.match(/p/gi) || { length: 0 }).length ===
    (s.match(/y/gi) || { length: 0 }).length
  );
}
