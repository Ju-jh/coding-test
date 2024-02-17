// https://www.acmicpc.net/problem/11005

/* 문제
10진법 수 N이 주어진다. 이 수를 B진법으로 바꿔 출력하는 프로그램을 작성하시오.

10진법을 넘어가는 진법은 숫자로 표시할 수 없는 자리가 있다. 이런 경우에는 다음과 같이 알파벳 대문자를 사용한다.

A: 10, B: 11, ..., F: 15, ..., Y: 34, Z: 35

입력
첫째 줄에 N과 B가 주어진다. (2 ≤ B ≤ 36) N은 10억보다 작거나 같은 자연수이다.

출력
첫째 줄에 10진법 수 N을 B진법으로 출력한다. */

const inputData = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split(' ');

const N = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

const jinbub = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
  16: 'G',
  17: 'H',
  18: 'I',
  19: 'J',
  20: 'K',
  21: 'L',
  22: 'M',
  23: 'N',
  24: 'O',
  25: 'P',
  26: 'Q',
  27: 'R',
  28: 'S',
  29: 'T',
  30: 'U',
  31: 'V',
  32: 'W',
  33: 'X',
  34: 'Y',
  35: 'Z',
};

function convertToBaseB(decimalNumber, base) {
  let baseBNumber = '';
  while (decimalNumber > 0) {
    let remainder = decimalNumber % base;
    baseBNumber = jinbub[remainder] + baseBNumber;
    decimalNumber = Math.floor(decimalNumber / base);
  }
  return baseBNumber || '0';
}

let baseBNumber = convertToBaseB(N, B);

console.log(baseBNumber);
