/**
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
 */

function solution(str) {
  const answer = str.split('').reduce((acc, cur) => {
    acc += !isNaN(Number(cur)) ? cur : '';
    return acc;
  }, '');

  return parseInt(answer, 10);
}

console.log(solution('g0en2T0s8eSoft'));
