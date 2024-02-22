/* https://www.acmicpc.net/problem/1978

문제
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

출력
주어진 수들 중 소수의 개수를 출력한다.

예제 입력 1 
4
1 3 5 7
예제 출력 1 
3
출처
데이터를 추가한 사람: bclim9108, nova9128
문제의 오타를 찾은 사람: djm03178 */

const inputData = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(inputData[0]);
const Nums = inputData[1].split(' ').map(Number);
let answer = 0;
for (let i = 0; i < N; i++) {
  let Num = Nums[i];
  let temptotal = 0;

  for (let j = 1; j < Num; j++) {
    if (Num % j === 0) {
      temptotal++;
    }
  }
  if (temptotal === 1) {
    answer++;
  }
}

console.log(answer);
