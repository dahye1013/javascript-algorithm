/**
 * 위장
 * https://programmers.co.kr/learn/courses/30/lessons/42578
 */

function solution(clothes) {
  const typeSizes = clothes.reduce((acc, cur, i) => {
    const [name, type] = cur;
    acc[type] = ++acc[type] || 1;
    if (clothes.length - 1 === i) {
      return Object.values(acc);
    }
    return acc;
  }, {});

  return (
    typeSizes.reduce((acc, cur) => {
      return acc * ++cur;
    }, 1) - 1
  );
}
