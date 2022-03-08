/**
 * [대문자 찾기]
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
 */

//[내 풀이법] ------------------------------------------------------
function solution(str) {
  const upperStrArray = str.toUpperCase().split("");

  return str.split("").reduce((acc, cur, i) => {
    if (upperStrArray[i] === cur) acc += 1;
    return acc;
  }, 0);
}

console.log(solution("KoreaTimeGood"));

//[다른 풀이법] ------------------------------------------------------
function solution(str) {
  return str.split("").reduce((acc, cur, i) => {
    //   TIP 👍 : toUpperCase는 원본 데이터를 바꾸는 것이 아니라, 반환 값에만 적용된다.
    if (cur === cur.toUpperCase()) acc += 1;
    return acc;
  }, 0);
}

console.log(solution("KoreaTimeGood"));
