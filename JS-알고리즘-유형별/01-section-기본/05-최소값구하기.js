/**
 * [최솟값 구하기]
 * 7개의 숫자가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하시오.
 */

//[내 풀이법] ------------------------------------------------------
function solution(...numbers) {
  return numbers.reduce((acc, cur) => {
    if (cur < acc) acc = cur;
    return acc;
  }, Number.MAX_SAFE_INTEGER);
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));
