/**
 * @description
 * A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
 * 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.
 *
 * @param {array} arr1
 * A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
 *
 * @param {arry} arr2
 * B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
 *
 * @returns {string}
 */

function solution(arr1, arr2) {
  return arr1.reduce((acc, _, i) => {
    if (arr1[i] === arr2[i]) acc.push('D');
    else if (arr1[i] - arr2[i] === 1 || arr1[i] - arr2[i] === -2) {
      acc.push('A');
    } else {
      acc.push('B');
    }
    return acc;
  }, []);
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
