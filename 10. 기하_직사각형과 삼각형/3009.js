// https://www.acmicpc.net/problem/3009

/* 문제
세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

입력
세 점의 좌표가 한 줄에 하나씩 주어진다. 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.

출력
직사각형의 네 번째 점의 좌표를 출력한다. */

const inputData = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const [one_x, one_y] = inputData[0].split(' ').map(Number);
const [two_x, two_y] = inputData[1].split(' ').map(Number);
const [three_x, three_y] = inputData[2].split(' ').map(Number);
let [four_x, four_y] = [0, 0];

if (one_x === two_x) {
  four_x = three_x;
} else if (one_x === three_x) {
  four_x = two_x;
} else if (two_x === three_x) {
  four_x = one_x;
}

if (one_y === two_y) {
  four_y = three_y;
} else if (one_y === three_y) {
  four_y = two_y;
} else if (two_y === three_y) {
  four_y = one_y;
}

console.log(four_x, four_y);
