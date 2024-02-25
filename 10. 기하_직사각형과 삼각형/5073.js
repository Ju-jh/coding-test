// https://www.acmicpc.net/problem/5073

/* 문제
삼각형의 세 변의 길이가 주어질 때 변의 길이에 따라 다음과 같이 정의한다.

Equilateral :  세 변의 길이가 모두 같은 경우
Isosceles : 두 변의 길이만 같은 경우
Scalene : 세 변의 길이가 모두 다른 경우
단 주어진 세 변의 길이가 삼각형의 조건을 만족하지 못하는 경우에는 "Invalid" 를 출력한다. 예를 들어 6, 3, 2가 이 경우에 해당한다. 가장 긴 변의 길이보다 나머지 두 변의 길이의 합이 길지 않으면 삼각형의 조건을 만족하지 못한다.

세 변의 길이가 주어질 때 위 정의에 따른 결과를 출력하시오.

입력
각 줄에는 1,000을 넘지 않는 양의 정수 3개가 입력된다. 마지막 줄은 0 0 0이며 이 줄은 계산하지 않는다.

출력
각 입력에 맞는 결과 (Equilateral, Isosceles, Scalene, Invalid) 를 출력하시오. */

const inputData = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const N = inputData.length;

for (let i = 0; i < N; i++) {
  let [a, b, c] = inputData[i].split(' ').map(Number);

  let finish = a === 0 && b === 0 && c === 0;
  let Equilateral = a === b && b === c && c === a;
  let Isosceles =
    (a === b && b !== c && a !== c) ||
    (a !== b && b === c && a !== c) ||
    (c === a && a !== b && b !== c);
  let Scalene = a !== b && b !== c && c !== a;
  let Invalid = a >= b + c || b >= c + a || c >= a + b;

  if (finish) {
    return;
  } else if (Invalid) {
    console.log('Invalid');
  } else if (Equilateral) {
    console.log('Equilateral');
  } else if (Isosceles) {
    console.log('Isosceles');
  } else if (Scalene) {
    console.log('Scalene');
  }
}
