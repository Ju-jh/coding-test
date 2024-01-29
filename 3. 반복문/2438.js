// https://www.acmicpc.net/problem/2438

/* 문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다. */

const inputData = +require('fs').readFileSync(0, 'utf8').toString().trim();

row = '';

for (let i = 1; i <= inputData; i++) {
  row += '*';
  console.log(row);
}
