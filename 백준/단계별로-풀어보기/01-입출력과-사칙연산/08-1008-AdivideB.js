const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const result = input.reduce((acc, cur) => acc / cur);
console.log(result);
