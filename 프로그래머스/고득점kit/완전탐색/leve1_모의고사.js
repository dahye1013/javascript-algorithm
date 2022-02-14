/**
 * 모의고사
 * ref: https://programmers.co.kr/learn/courses/30/lessons/42840
 */

function solution(answers) {
  let answer = [];
  const pattern = [
    [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const result = answers
    .reduce(
      (acc, cur, i) => {
        if (pattern[0][i % pattern[0].length] === cur) {
          acc[0].value += 1;
        }
        if (pattern[1][i % pattern[1].length] === cur) {
          acc[1].value += 1;
        }
        if (pattern[2][i % pattern[2].length] === cur) {
          acc[2].value += 1;
        }
        return acc;
      },
      [
        { index: 1, value: 0 },
        { index: 2, value: 0 },
        { index: 3, value: 0 },
      ]
    )
    .sort((a, b) => b.value - a.value);

  for (let i = 0; i < result.length; i++) {
    if (result[0].value == result[i].value) {
      answer.push(result[i].index);
    }
  }

  return answer;
}
