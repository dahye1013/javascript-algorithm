/**
 * [홀수]
 * 7개의 자연수가 주어질 때,
 * 이들 중 홀수인 자연수들을 모두 골라 그 합 구하고,
 * 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 *
 * (입력설명)
 * 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
 * (출력설명)
 * 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
 */

//[내 풀이법] ------------------------------------------------------
function solution(...numbers) {
  return numbers.reduce(
    (acc, cur) => {
      if (cur % 2 !== 0) {
        acc[0] += cur;

        const isSmaller = cur < acc[1];
        if (isSmaller) acc[1] = cur;
      }
      return acc;
    },
    [0, Number.MAX_SAFE_INTEGER]
  );
}

console.log(solution(12, 77, 38, 41, 53, 92, 85));
