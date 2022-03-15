/**
 * @description
 * [큰 수 출력하기]
 * N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)
 *
 * @param {Array.<number>} arr
 * 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
 *
 * @returns {Array.<number>}
 * 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
 */
function solution(arr) {
  return arr.reduce(
    (acc, cur, i) => {
      if (cur > arr[i - 1]) acc.push(cur);
      return acc;
    },
    [arr[0]]
  );
}

solution([7, 3, 9, 5, 6, 12]); //7 9 6 12
