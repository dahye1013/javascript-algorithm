let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

const result = input.reduce((acc, cur) => acc * cur);
console.log(result);
