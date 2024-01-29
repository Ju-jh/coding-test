// https://www.acmicpc.net/problem/1008

// 문제
// 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');
const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

function divide(a, b) {
  0 < a && b < 10 && console.log(a / b);
}

divide(A, B);
