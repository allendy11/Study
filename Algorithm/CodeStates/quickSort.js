/*
# **quickSort**

## **문제**

정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

## **입력**

### **인자 1 : arr**

- `number` 타입을 요소로 갖는 배열
- `arr[i]`는 정수
- `arr.length`는 100,000 이하

## **출력**

- `number` 타입을 요소로 갖는 배열을 리턴해야 합니다.
- 배열의 요소는 오름차순으로 정렬되어야 합니다.
- `arr[i] <= arr[j]` (`i < j`)

## **주의사항**

- **퀵 정렬**을 구현해야 합니다.
- `arr.sort` 사용은 금지됩니다.
- 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

## **입출력 예시**

```
let output = quickSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
```

## **Advanced**

- quickSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.

## pseudocode

*/

const quickSort = function (arr, callback) {
  if (!callback) callback = (el) => el; // callback 함수 유무
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  let left = [];
  let right = [];
  let num = callback(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (num < callback(arr[i])) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  let _left = quickSort(left);
  let _right = quickSort(right);
  // return quickSort(left).concat(arr[0],quickSort(right))
  return _left.concat(arr[0], _right);
};

/*
## Note
quick sort 는 배열에서 기준이 되는 숫자(피벗) 를 가지고 나머지 숫자와 비교하여 양쪽으로 구분하는 작업을 반복하여 정렬하는 방법이다. 피벗은 보통 배열의 첫번째 숫자를 사용하며, 재귀를 이용하게 된다.
*/
