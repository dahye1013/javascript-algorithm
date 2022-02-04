/**
 * 시저암호
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12926
 */

function solution(s, n) {
  return s.split("").reduce((acc, cur) => {
    if (cur === " ") return (acc += " ");
    return (acc +=
      cur.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(cur.charCodeAt() + n - 26)
        : String.fromCharCode(cur.charCodeAt() + n));
  }, "");
}
