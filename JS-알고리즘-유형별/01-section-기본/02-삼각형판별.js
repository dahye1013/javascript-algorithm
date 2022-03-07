/**
 * [삼각형 판별하기]
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
 * 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
 */
//[내 풀이법] ------------------------------------------------------
function solution(a, b, c) {
  const [a1, a2, a3] = Array(a, b, c).sort((a, b) => a - b);
  return a1 + a2 > a3 ? "YES" : "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

//[다른 풀이법] ------------------------------------------------------
function solution(a, b, c) {
  let answer = "YES",
    max = 0;
  let tot = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  //짧은 막대 길이의 합이 가장 긴 막대(max)보다 길면 YES
  if (tot - max >= max) answer = "NO";
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
