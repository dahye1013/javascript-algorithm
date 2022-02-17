/**
 * 큰 수 만들기
 * ref: https://programmers.co.kr/learn/courses/30/lessons/42883
 */

function solution(number, k) {
  const stack = [];
  for (const n of number) {
    //1.삭제할 값(k)이 남아 있고
    //2.stack top이 현재수보다 작다면, pop()
    while (k > 0 && stack[stack.length - 1] < n) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }
  //k만큼 제거하지 못한 경우, 뒷자리 제거
  return stack.slice(0, stack.length - k).join("");
}
