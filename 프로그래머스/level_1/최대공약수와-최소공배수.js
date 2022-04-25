/**
 * 최대공약수와 최소공배수
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12940
 */

/**
 * @description
 * [gcd]
 * 최대 공약수 공식
 * -> 유클리드호제법
 * 2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 가정한다. (단, a>b)
 * a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
 * 이 성질에 따라, b를 r로 나눈 나머지 r’를 구한다.
 * 다시 r을 r’로 나눈 나머지를 구하는 과정을 반복한다.
 * 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
 *
 * [lcm]
 * 최소공배수 공식
 * -> 두 수의 곱 / 최대공약수
 */

function solution(n, m) {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  return [gcd(min, max), lcm(min, max)];
}

// 최소공약수
function gcd(min, max) {
  return min % max === 0 ? max : gcd(max, min % max);
}

//최대 공배수
function lcm(min, max) {
  return (min * max) / gcd(min, max);
}
