// https://www.acmicpc.net/problem/27866

/* 문제
단어 
$S$와 정수 
$i$가 주어졌을 때, 
$S$의 
$i$번째 글자를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 영어 소문자와 대문자로만 이루어진 단어 
$S$가 주어진다. 단어의 길이는 최대 
$1\,000$이다.

둘째 줄에 정수 
$i$가 주어진다. (
$1 \le i \le \left|S\right|$)

출력
 
$S$의 
$i$번째 글자를 출력한다. */

const inputData = require('fs')
  .readFileSync(0, 'utf8')
  .toString()
  .trim()
  .split('\n');

const S = inputData[0].split('');
const idx = Number(inputData[1]);

console.log(S[idx - 1]);
