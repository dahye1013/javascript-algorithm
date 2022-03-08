/**
 * [대문자로 통일]
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.
 */

//[내 풀이법] ------------------------------------------------------
function solution(str) {
  return str.toUpperCase();
}

console.log(solution("ItisTimeToStudy"));

//[다른 풀이법] ------------------------------------------------------

function solution(str) {
  // TIP1 : 아스키 대문자 - 65~90 / 소문자 - 97~122
  // TIP2 : 소문자 아스키 숫자 -32하면 대문자가 된다.
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    const asciiNumber = str.charCodeAt(i);
    const isLowerCase = asciiNumber >= 97 && asciiNumber <= 122;
    if (isLowerCase) answer += String.fromCharCode(asciiNumber - 32);
    else answer += str[i];
  }
  return answer;
}
console.log(solution("ItisTimeToStudy"));
