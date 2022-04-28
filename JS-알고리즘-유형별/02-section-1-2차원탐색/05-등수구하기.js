/**
 * @description
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
 *
 * @return {Array.<number>}
 */

function solution(arr) {
  const answer = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // 기준이 되는 점수(arr[i])보다 크면 더한다.
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
}

solution([87, 89, 92, 100, 76]);
