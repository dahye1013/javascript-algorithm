/**
 * [H-Index]
 * ref: https://programmers.co.kr/learn/courses/30/lessons/42747
 *
 * 해당 문제는 풀이보다 문제 해석이 더 어려웠다.
 * 아래는 문제 내용을 위해서 참고하기 위한 링크이다.
 * ref: https://www.ibric.org/myboard/read.php?Board=news&id=270333
 */

function solution(citations) {
  return citations
    .sort((a, b) => b - a)
    .reduce((acc, cur, i) => {
      if (cur > i) {
        acc += 1;
      }
      return acc;
    }, 0);
}
