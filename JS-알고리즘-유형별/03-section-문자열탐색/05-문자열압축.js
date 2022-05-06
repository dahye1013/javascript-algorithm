/**
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
 * 반복횟수가 1인 경우 생략합니다.
 */

/**
 * @description
 * - 1. 문자열을 배열로 만들기
 * - 2. index 기준으로 전 문자열과 비교하여 일치하면 일치된 숫자 누적
 * - 3. 문자열이 일치하지 않고, 1보다 크면 누적된 숫자 append
 * - 4. 배열 탐색이 완료되면 완성된 문자열 반환
 *
 * (일반 for문으로 해결가능하면, 굳이 복잡하게 하지 말기. 가독성이 상당히 떨어지는 듯하다...)
 */
function solution1(str) {
  return str.split('').reduce(
    (acc, cur, i, array) => {
      if (array[i - 1] === cur) {
        acc.accNum += 1;
      }

      if (array[i - 1] !== cur) {
        if (acc.accNum > 1) acc.accStr += acc.accNum;
        acc.accNum = 1;
        acc.accStr += cur;
      }

      if (i === array.length - 1) {
        return acc.accStr;
      }

      return acc;
    },
    {
      accStr: '',
      accNum: 1,
    }
  );
}

console.log(solution1('KKHSSSSSSSE'));

/**
 *
 * @description
 * - 일반 for문 사용
 */
function solution2(s) {
  let answer = '';
  let count = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
      continue;
    }

    answer += s[i];
    if (count > 1) answer += String(count);
  }
  return answer;
}

console.log(solution2('KKHSSSSSSSE'));
