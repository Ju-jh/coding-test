// https://www.acmicpc.net/problem/10807

/* 문제
총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 둘째 줄에는 정수가 공백으로 구분되어져있다. 셋째 줄에는 찾으려고 하는 정수 v가 주어진다. 입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.

출력
첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력한다. */

//내가 푼 문제

/* const inputData = require('fs')
  .readFileSync(0, 'utf8')
  .toString()
  .trim()
  .split('\n');

const N = Number(inputData[0]);
const nums = inputData[1].split(' ');
const v = Number(inputData[2]);

let answer = 0;

nums.forEach((num) => {
  if (+num === v) {
    answer += 1;
  }
});

console.log(answer); */

//다른 사람들 혹은 더 알맞은 방법 같아 보이는 풀이법

// filter
/* const inputData = require('fs')
  .readFileSync(0, 'utf8')
  .toString()
  .trim()
  .split('\n');

const [N, S, V] = inputData

const count = S.split(' ').filter((ele) => ele == V).length;

console.log(count); */

//reduce
const inputData = require('fs')
  .readFileSync(0, 'utf8')
  .toString()
  .trim()
  .split('\n');

const [N, S, V] = inputData;

const count = S.split(' ').reduce((acc, ele) => {
  if (ele === V) {
    acc += 1;
  }
  return acc;
}, 0);

console.log(count);

/* 3가지의 방법을 모두 써본결과 
메모리 사용은 처음에 사용한 방법이 가장 많았고 
시간은 filter를 사용한 방법이 가장 빨랐다. */
