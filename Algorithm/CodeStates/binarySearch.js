/*
# **binarySearch**

## **문제**

오름차순 정렬된 정수의 배열(`arr`)과 정수(`target`)를 입력받아 `target`의 인덱스를 리턴해야 합니다.

## **입력**

### **인자 1 : arr**

- `number` 타입을 요소로 갖는 배열
- `arr[i]`는 정수

### **인자 2 : target**

- `number` 타입의 정수

## **출력**

- `number` 타입을 리턴해야 합니다.

## **주의사항**

- **이진탐색 알고리즘**(`O(logN)`)을 사용해야 합니다.
- 단순한 배열 순회(`O(N)`)로는 통과할 수 없는 테스트 케이스가 존재합니다.
- `target`이 없는 경우, -`1`을 리턴해야 합니다.

## **입출력 예시**

```
let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1
```

## pseudocode

이진 탐색의 기본형 문제

최소 인덱스와 최대인덱스 를 먼저 구한다

반복문 안에서 중간 인덱스를 구하여 타겟과 비교

- 타겟이 크면 최소 인덱스 = 중간 인덱스 +1
- 타겟이 작으면 최대 인덱스 = 중간 인덱스 -1

반복문이 끝나도 결과가 나오지 않으면 타겟이 배열안에 없으므로 -1 리턴
*/

const binarySearch = function (arr, target) {
  let max = arr.length - 1;
  let min = 0;
  let mid;

  while (min <= max) {
    mid = parseInt((max + min) / 2);
    if (arr[mid] === target) {
      return mid;
    } else {
      if (arr[mid] > target) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
  }
  return -1;
};
