// https://www.acmicpc.net/problem/2588

// 문제
// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

// --- 사이트에서 사진 참조 ---

// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

// 출력
// 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

const inputData = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

let b = inputData[1].split('');

let one = Number(inputData[0]) * Number(b[2]);
let two = Number(inputData[0]) * Number(b[1]);
let three = Number(inputData[0]) * Number(b[0]);

console.log(one);
console.log(two);
console.log(three);
console.log(three * 100 + two * 10 + one);
