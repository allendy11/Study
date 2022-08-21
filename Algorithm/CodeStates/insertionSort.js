/* 
# **insertionSort**

## **문제**

정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

## **입력**

### **인자 1 : arr**

- `number` 타입을 요소로 갖는 배열
- `arr[i]`는 정수
- `arr.length`는 1,000 이하

## **출력**

- `number` 타입을 요소로 갖는 배열을 리턴해야 합니다.
- 배열의 요소는 오름차순으로 정렬되어야 합니다.
- `arr[i] <= arr[j]` (`i < j`)

## **주의사항**

- **삽입 정렬**을 구현해야 합니다.
- `arr.sort` 사용은 금지됩니다.
- 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

## **입출력 예시**

```
let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
```

## **Advanced**

- insertionSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.

## pseudocode

*/

const insertionSort = function (arr, callback) {
  let i, j, key;
  if (!callback) {
    callback = (el) => el;
  }
  for (i = 1; i < arr.length; i++) {
    key = arr[i]; // 현재 삽입될 숫자인 i번째 정수를 key 변수로 복사

    // 현재 정렬된 배열은 i-1까지이므로 i-1번째부터 역순으로 조사한다.
    // j 값은 음수가 아니어야 되고
    // key 값보다 정렬된 배열에 있는 값이 크면 j번째를 j+1번째로 이동
    for (j = i - 1; j >= 0 && callback(arr[j]) > callback(key); j--) {
      arr[j + 1] = arr[j]; // 레코드의 오른쪽으로 이동
    }

    arr[j + 1] = key;
  }
  return arr;
};

/*
## Note

삽입정렬은 처음에 배열의 두번째 인자부터 key 로 두고 key를 중심으로 안쪽(왼쪽)에 있는 수와 비교하여 값을 삽입하여 정렬하는 방식 

이중 반복문의 형태를 하고 있다

*/
