/* https://www.acmicpc.net/problem/11653

문제
정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.

출력
N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.

예제 입력 1 
72
예제 출력 1 
2
2
2
3
3
예제 입력 2 
3
예제 출력 2 
3
예제 입력 3 
6
예제 출력 3 
2
3
예제 입력 4 
2
예제 출력 4 
2
예제 입력 5 
9991
예제 출력 5 
97
103
출처
문제의 오타를 찾은 사람: BaaaaaaaaaaarkingDog, Green55
문제를 만든 사람: baekjoon
잘못된 조건을 찾은 사람: wjdclgns12 */

const N = Number(require('fs').readFileSync('example.txt').toString().trim());

let tempNum = N;

for (let i = 2; i * i <= tempNum; i++) {
  while (tempNum % i === 0) {
    console.log(i);
    tempNum = tempNum / i;
  }
}

if (tempNum !== 1) {
  console.log(tempNum);
}
