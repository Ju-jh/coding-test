// https://www.acmicpc.net/problem/2444

/* 문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다. */

const inputData = Number(
  require('fs').readFileSync(0, 'utf8').toString().trim()
);

const hallow = ' ';
const star = '*';

for (let i = 1; i < inputData * 2; i++) {
  if (i % 2 != 0) {
    console.log(`${hallow.repeat((inputData * 2 - i) / 2)}${star.repeat(i)}`);
  }
}

for (let i = inputData * 2 - 2; i >= 1; i--) {
  if (i % 2 != 0) {
    console.log(`${hallow.repeat((inputData * 2 - i) / 2)}${star.repeat(i)}`);
  }
}
