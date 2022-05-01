/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
 */

/**
 * @description
 * - reverse 사용하지 않고 구현하기.
 * ✨ 순방향[i]과 역방향[len - i - 1]을 잘 활용하자.
 */
function solution(s) {
  let str = s.toUpperCase();
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) {
      return 'NO';
    }
  }
  return 'YES';
}

/**
 * @description
 * - reverse 사용하여 구현하기.
 */
function solution(s) {
  return s.toUpperCase().split('').reverse().join('') === s.toUpperCase()
    ? 'YES'
    : 'NO';
}

console.log(solution('gooG'));
