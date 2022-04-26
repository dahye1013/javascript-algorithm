/**
 * 최솟값 만들기
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12941
 *
 * @param arr1
 * @param arr2
 * @description 가장 작은 수와 가장 큰수를 곱하는 것을 반복한다.
 * @returns {number}
 */

function solution(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);

  return arr1.reduce((acc, _, i) => {
    acc += arr1[i] * arr2[i];
    return acc;
  }, 0);
}
