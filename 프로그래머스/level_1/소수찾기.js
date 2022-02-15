/**
 * 소수 찾기
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12921
 *
 * 에라토스테네스의 체
 * - 해당 알고리즘을 사용해야 효율성 테스트를 통과 할 수 있음
 * https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4
 */

function solution(n) {
  var answer = 0;
  //소수 여부를 판가름하는 배열 초기화
  let check = Array(n + 1).fill(true);

  for (let i = 2; i <= n; i++) {
    /**
     * 소수를 판가름 한 후, 해당 소수에 대한 배수를 경우의 수에서 모두 제거한다.
     */
    if (check[i] == true) {
      answer++;
      for (let j = 2; j * i <= n; j++) {
        check[j * i] = false;
      }
    }
  }
  return answer;
}
