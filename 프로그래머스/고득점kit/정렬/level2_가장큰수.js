/**
 * 가장 큰 수
 * https://programmers.co.kr/learn/courses/30/lessons/42746
 */

function solution(numbers) {
  if (numbers.every((item) => item === 0)) {
    return "0";
  }

  return numbers
    .map((item) => item.toString())
    .sort((a, b) => {
      //기존 문자열의 조합의 수가 더 크다면 유지, 아니라면 배열 순서를 바꿈
      if (a + b > b + a) {
        return -1;
      }
      if (a + b < b + a) {
        return 1;
      }
    })
    .join("");
}

/**
 * Refactoring Version 1
 * - 가독성 있게 삼항연산자 사용
 * - (a+b)-(b+a) 선행값이 크다면 음수를 반환함
 */

function solution(numbers) {
  if (numbers.every((item) => item === 0)) {
    return "0";
  }

  return numbers
    .map((item) => item + "")
    .sort((a, b) => {
      return a + b > b + a ? -1 : 1;
    })
    .join("");
}
