// https://www.acmicpc.net/problem/9506

/* 문제
어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면, 그 수를 완전수라고 한다.

예를 들어 6은 6 = 1 + 2 + 3 으로 완전수이다.

n이 완전수인지 아닌지 판단해주는 프로그램을 작성하라.

입력
입력은 테스트 케이스마다 한 줄 간격으로 n이 주어진다. (2 < n < 100,000)

입력의 마지막엔 -1이 주어진다.

출력
테스트케이스 마다 한줄에 하나씩 출력해야 한다.

n이 완전수라면, n을 n이 아닌 약수들의 합으로 나타내어 출력한다(예제 출력 참고).

이때, 약수들은 오름차순으로 나열해야 한다.

n이 완전수가 아니라면 n is NOT perfect.를 출력한다.
  
  
출처
ICPC > Regionals > North America > Pacific Northwest Regional > 2013 Pacific Northwest Region Programming Contest F번

문제의 오타를 찾은 사람: jh05013, pkcchoi3
데이터를 추가한 사람: seong954t
문제를 번역한 사람: yukariko */

const inputData = require('fs')
  .readFileSync('example.txt')
  .toString()
  .split('\n')
  .map(Number);

for (let i = 0; i < inputData.length; i++) {
  let totalNum = 0;
  let totalNumArr = [];
  let Num = inputData[i];

  if (Num === -1) {
    break;
  }

  for (let j = 1; j < Num; j++) {
    if (Num % j === 0) {
      totalNum += j;
      totalNumArr.push(j);
    }
  }

  if (Num === totalNum) {
    console.log(`${Num} = ${totalNumArr.join(' + ')}`);
  } else {
    console.log(`${Num} is NOT perfect.`);
  }
}
