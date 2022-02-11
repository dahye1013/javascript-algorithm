/**
 * (월간 코드 챌린지 시즌1)
 * 두 개 뽑아서 더하기
 * ref: https://programmers.co.kr/learn/courses/30/lessons/68644
 */

function solution(numbers) {
  let answer = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        answer.add(numbers[i] + numbers[j]);
      }
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}
