/**
 * @description
 * [가장 긴 문자열]
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
 *
 * @param {array} strArr
 * 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
 * 두 번째 줄부터 N개의 문자열이 주어진다.
 * 문자열의 길이는 100을 넘지 않습니다. 각 문자열의 길이는 서로 다릅니다.
 *
 * @returns {string}
 * 첫 줄에 가장 긴 문자열을 출력한다.
 */

function solution(arr = []) {
  return arr.reduce((acc, cur) => {
    acc = cur.length > acc.length ? cur : acc;
    return acc;
  }, '');
}

solution([5, 'teacher', 'time', 'student', 'beautiful', 'good']); //beautiful
