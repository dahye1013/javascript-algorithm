/**
 * K번째수
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 */

function solution(array, commands) {
  return commands.reduce((acc, cur) => {
    const [i, j, k] = cur;
    const result = array.slice(i - 1, j).sort((a, b) => a - b);
    acc.push(result[k - 1]);
    return acc;
  }, []);
}
