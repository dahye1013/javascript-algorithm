/**
 * @description
 * A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여
 * 오름차순으로 출력하는 프로 그램을 작성하세요.
 *
 * @param {Array.<number>} arr1
 * @param {Array.<number>} arr2
 */
function solution(arr1, arr2) {
    return arr1.filter(n => arr2.includes(n)).sort((a, b) => a - b);
}

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));