/**
 * 핸드폰 번호 가리기
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12948
 */

function solution(phone_number) {
  const OPEN_SIZE = 4;
  return (
    "*".repeat(phone_number.length - OPEN_SIZE) + phone_number.slice(-OPEN_SIZE)
  );
}
