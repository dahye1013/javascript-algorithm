/**
 * @description
 * [가운데 문자 출력]
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
 * 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 *
 * @param {string} str
 * 첫 줄에 문자열이 입력된다.
 * 문자열의 길이는 100을 넘지 않습니다.
 *
 * @returns {string}
 * 첫 줄에 가운데 문자를 출력합니다.
 */

function solution(str) {
  const nth = Math.floor(str.length) / 2;
  return str.length % 2 ? str.slice(nth, nth + 1) : str.slice(nth - 1, nth + 1);
}

solution('study'); //u
solution('good'); //oo
