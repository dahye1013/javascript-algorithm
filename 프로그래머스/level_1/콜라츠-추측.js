/**
 * 콜라츠 추측
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12943
 */

function solution(num) {
  var answer = 0;
  const doEven = (n) => n / 2;
  const doOdd = (n) => n * 3 + 1;

  while (num != 1) {
    num = num % 2 ? doOdd(num) : doEven(num);
    answer++;
    if (answer === 500) {
      answer = -1;
      break;
    }
  }

  return answer;
}
