/**
 * 행렬의 덧셈
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12950
 */

function solution(arr1, arr2) {
  let answer = [[]];
  for (const i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (const j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
