/**
 * @description
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력한다.
 *
 * @return {number}
 */
function solution(arr) {
  const n = arr.length;
  let answer = Number.MIN_SAFE_INTEGER;
  // 행의 합
  let rowSum = 0;
  // 열의 합
  let columnSum = 0;

  //(1) 2중 for문으로 각각 행렬의 합을 구해서, 가장 큰 값을 세팅한다.
  for (let i = 0; i < arr.length; i++) {
    rowSum = columnSum = 0;
    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      columnSum += arr[j][i];
    }
    answer = Math.max(answer, rowSum, columnSum);
  }

  rowSum = columnSum = 0;

  //(2) 대각선 값을 구해서 세팅한다.
  for (let i = 0; i < n; i++) {
    rowSum += arr[i][i];
    columnSum += arr[i][n - i - 1];
  }
  answer = Math.max(answer, rowSum, columnSum);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
