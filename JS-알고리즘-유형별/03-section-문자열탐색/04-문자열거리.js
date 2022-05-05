/**
 * [가장 짧은 문자거리]
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 */

function solution(str, t) {
  const arr = str.split('');

  //(1) 인자로 받는 문자열보다 큰 값으로 초기화
  let STANDARD_START = 1000;
  let answer = Array.from({ length: arr.length }, i =>
    i === 0 ? STANDARD_START + 1 : 0
  );

  //(2) 순방향으로 탐색하면서 target이 되는 문자열과 떨어진 거리 세팅
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      STANDARD_START = 0;
      answer[i] = STANDARD_START;
      continue;
    }
    STANDARD_START += 1;
    answer[i] = STANDARD_START;
  }

  //(2) 역방향으로 탐색하면서 target이 되는 문자열과의 떨어진 거리를 세팅
  STANDARD_START = 1000;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === t) {
      STANDARD_START = 0;
      continue;
    }
    STANDARD_START += 1;
    // (3) 순방향, 역방향 결과 비교
    answer[i] = Math.min(answer[i], STANDARD_START);
  }
  return answer;
}

solution('teachermode', 'e');
