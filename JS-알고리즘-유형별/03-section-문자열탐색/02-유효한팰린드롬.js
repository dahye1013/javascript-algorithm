/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
 */

/**
 * @description
 * ✨ 순방향[i]과 역방향[len - i - 1]을 활용하기
 * ✨ replace(/[^a-z]/g, '') 정규식 활용하여 알파벳 회문만 검사하기
 */
function solution1(words) {
  words = words.toLowerCase().replace(/[^a-z]/g, '');
  const len = words.split('').length;
  const wordArr = words.toLowerCase().split('');
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (wordArr[i] !== wordArr[len - i - 1]) {
      return 'NO';
    }
  }
  return 'YES';
}

/**
 * @description
 * ✨ reverse 활용하기
 * ✨ replace(/[^a-z]/g, '') 정규식 활용하여 알파벳 회문만 검사하기
 */
function solution2(words) {
  words = words.toLowerCase().replace(/[^a-z]/g, '');
  return words.toLowerCase().split('').reverse().join('') === words
    ? 'YES'
    : 'NO';
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution1(str));
console.log(solution2(str));
