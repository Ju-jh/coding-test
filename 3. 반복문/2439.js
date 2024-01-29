// https://www.acmicpc.net/problem/2439

/* 문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다. */

const inputData = 5;
const hallow = ' ';
const star = '*';

// 이중 for문

for (let i = 1; i <= inputData; i++) {
  let answer = '';
  for (let j = inputData - i; j >= 1; j--) {
    answer += hallow;
  }
  for (let k = 1; k <= i; k++) {
    answer += star;
  }
  console.log(answer);
}

// repeat()

for (let i = 1; i <= inputData; i++) {
  console.log(hallow.repeat(inputData - i) + star.repeat(i));
}

// 두개방법의 속도 차이는 동일하나 메모리는 repeat가 더 적게 사용했다.
