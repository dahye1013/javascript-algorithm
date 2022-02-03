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

/**
 * [Refactoring Version1]
 * - 불필요한 인자 제거
 * - 코드 함축
 * - Object.values를 reduce 콜백 밖으로 꺼냄
 *
 * (회고)
 * 처음에는 일단 되는 방향으로 구현하고자 하였고,
 * 리팩토링시에는 불필요한 함수선언이나 매개변수를 줄여서 깔끔한 함수형 프로그래밍에 가깝게 구현하고자 하는 방향으로 고치고 싶었다.
 * 하지만, 이 코드가 가독성 있는지에 대한 의문이 생긴다.
 * reduce를 사용하여 구현할때, 'acc, cur'을 사용하는 것이 좋은 것일까?
 * 내부 scope에서는 함축하는 것이 좋을지 변수명을 더욱 길게하여 명시적으로 하는 것이 좋은지
 * 쫌 더 가독성 있는 코드는 어떻게 짜는 것이 좋으며, 변수명은 어떻게 짓는 것이 좋은지에 대해 더 고민해보고 싶다.
 *
 * @param {string[]} clothes
 * @returns {number}
 */
function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((acc, cur) => {
        acc[cur[1]] = ++acc[cur[1]] || 1;
        return acc;
      }, {})
    ).reduce((acc, cur) => acc * ++cur, 1) - 1
  );
}
