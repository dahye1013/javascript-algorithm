/**
 * @description
 * 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.
 */

function solution(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

const a = [1, 3, 5];
const b = [2, 3, 6, 7, 9];

console.log(solution(a, b));