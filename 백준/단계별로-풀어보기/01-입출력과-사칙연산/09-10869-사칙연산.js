const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const [n1, n2] = input;
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const divideRemainder = (a, b) => a % b;

console.log(`${add(n1, n2)}
${substract(n1, n2)}
${multiply(n1, n2)}
${divide(n1, n2)}
${divideRemainder(n1, n2)}
`);
