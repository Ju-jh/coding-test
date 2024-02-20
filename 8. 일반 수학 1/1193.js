/* https://www.acmicpc.net/problem/1193 */

/* 문제
무한히 큰 배열에 다음과 같이 분수들이 적혀있다.

1/1	1/2	1/3	1/4	1/5	…
2/1	2/2	2/3	2/4	…	…
3/1	3/2	3/3	…	…	…
4/1	4/2	…	…	…	…
5/1	…	…	…	…	…
…	…	…	…	…	…
이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.

X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.

출력
첫째 줄에 분수를 출력한다.

출처
문제를 만든 사람: author6
문제의 오타를 찾은 사람: deadlylaid
어색한 표현을 찾은 사람: djm03178
데이터를 추가한 사람: mj2park */

const inputData = require('fs').readFileSync('example.txt').toString().trim();

let tempNum = inputData;
let totalNum = 0;

for (let i = 1; ; i++) {
  if (tempNum - i <= 0) {
    tempNum = i;
    break;
  } else {
    tempNum -= i;
    totalNum += i;
  }
}

const Num = inputData - totalNum;

if (tempNum % 2 != 0) {
  console.log(`${tempNum - Num + 1}/${Num}`);
} else {
  console.log(`${Num}/${tempNum - Num + 1}`);
}
