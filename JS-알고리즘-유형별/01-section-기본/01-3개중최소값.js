/**
 * [최소값 구하기]
 * 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.
 * (정렬을 사용하지 않고 풀기)
 */

//[내 풀이법] ------------------------------------------------------
function solution(...args) {
  const arr = Array(...args);
  return arr.reduce((acc, cur) => {
    if (acc > cur) acc = cur;
    return acc;
  }, Number.MAX_SAFE_INTEGER);
}

console.log(solution(4, 7, 22));

//[다른 풀이법] ------------------------------------------------------
function solution(a, b, c) {
  let answer = Number.MAX_SAFE_INTEGER;
  if (a < b) {
    answer = a;
  } else answer = b;
  if (b < c) answer = c;
  return answer;
}
console.log(solution(2, 5, 1));
