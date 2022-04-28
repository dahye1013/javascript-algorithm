/**
 * @description
 * 기준점에서 네방향을 탐색해야한다.
 * 위(0, -1) 오른쪽(+1, 0) 아래(0, +1) 왼쪽(-1, 0)
 * dx = [0, 1, 0, -1]
 * dy = [-1, 0, +1, 0]
 */

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const n = arr.length;
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < dx.length; k++) {
        // 행 좌표
        const nx = i + dx[k];
        // 열 좌표
        const ny = j + dy[k];
        if (
          // 1. 가장자리를 참조하는 경우 제외
          nx >= 0 &&
          nx < n &&
          ny > 0 &&
          ny < n &&
          // 2. 현재 지점보다 큰 것이 존재하는 경우
          arr[nx][ny] >= arr[i][j]
        ) {
          // flag
          flag = 0;
          break;
        }

        if (flag) answer += 1;
      }
    }
  }
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
