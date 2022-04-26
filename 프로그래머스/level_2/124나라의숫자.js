/**
 * 124 나라의 숫자
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12899
 *
 * @description 124 나라에서 3의 몫은 1이 된다. 즉, (n-1)/3 을 사용하여 몫을 계산해야한다.
 * @param {*} n
 * @returns
 */
function solution(n) {
  let answer = '';
  while (n > 0) {
    if (n % 3 == 0) {
      answer = 4 + answer;
      n = n / 3 - 1;
    }
    if (n % 3 == 1) {
      answer = 1 + answer;
      n = Math.floor(n / 3);
    }
    if (n % 3 === 2) {
      answer = 2 + answer;
      n = Math.floor(n / 3);
    }
  }

  return answer;
}

// 다른 사람 풀이법 - key값 사용
function solution(n) {
  const NUMBER_TYPES = [1, 2, 4];
  let answer = '';
  while (n) {
    answer = NUMBER_TYPES[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return answer;
}
