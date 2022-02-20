/**
 * 이상한 문자 만들기
 * https://programmers.co.kr/learn/courses/30/lessons/12930
 */

function solution(s) {
  const sentenceArray = s.split(" ");

  const result = sentenceArray
    .map((word) => word.split(""))
    .reduce((acc, cur) => {
      cur.forEach((_, i) => {
        const isEven = i % 2 == 0;
        cur[i] = isEven ? cur[i].toUpperCase() : cur[i].toLowerCase();
      });
      cur.push(" ");

      return acc.concat(cur);
    }, []);

  result.pop();
  return result.join("");
}
