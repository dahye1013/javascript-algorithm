/**
 * 2016년
 * ref: https://programmers.co.kr/learn/courses/30/lessons/12901
 */

function solution(a, b) {
  const weeksName = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let days = 0;
  for (let i = 1; i <= a; i++) {
    if (i === a) {
      days += b;
      break;
    }
    if (i === 2) {
      days += 29;
      continue;
    }

    const isOdd = i % 2 !== 0;
    days += (isOdd && i) || (isOdd && !(i < 8)) ? 31 : 30;
  }
  return weeksName[(days - 1) % 7];
}
