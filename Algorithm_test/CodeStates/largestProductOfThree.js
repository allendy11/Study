/*
## **문제**

정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

## **입력**

### **인자 1 : arr**

- `number` 타입을 요소로 갖는 임의의 배열

## **출력**

- `number` 타입을 리턴해야 합니다.

## **주의사항**

- 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
- 배열의 요소는 **음수와 0을 포함하는** 정수입니다.
- 배열의 길이는 3 이상입니다.

## **입출력 예시**

```
let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
```

## **pseudocode**

멱집합의 원리를 이용하여 배열의 부분집합을 구한다.

부분집합에서 길이가 3일 경우 그수의 곱을 새로운 배열에 추가 

새로운 배열에서 가장 큰수를 리턴 → Math.max() 

*/
function largestProductOfThree(arr) {
  const isValid = new Array(arr.length).fill(false);
  const subSets = [];
  const newArr = [];
  const subSet = function DFS(depth) {
    if (depth === arr.length) {
      const subSet = arr.filter((el, index) => isValid[index]);
      subSets.push(subSet);
      return;
    }

    isValid[depth] = true;
    subSet(depth + 1);

    isValid[depth] = false;
    subSet(depth + 1);
  };

  subSet(0);
  for (let i = 0; i < subSets.length; i++) {
    if (subSets[i].length === 3) {
      let num = subSets[i].reduce((acc, cur) => {
        return acc * cur;
      }, 1);
      newArr.push(num);
    }
  }
  return Math.max(...newArr);
}

// reference
function largestProductOfThree(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
}

/* 
## Note
사실 solve1 도 문제가 있어보이진 않는다. 생각한 그대로 부분집합을 활용하였다.

하지만 solve2 를 보게 되면 한가지 방법만을 생각하기 보다는 생각의 전환이 중요하다는 것을 알수있다.

solve2 에서는 주어진 배열을 정렬하게되면 경우의 수를 생각 해볼 수있다.

- 배열의 모든수가 양수일경우 → 배열의 끝의 세개의 수의 곱이 가장 큰수 arr[n-1] * arr[n-2] * arr[n-3]
- 모든수가 음수일경우 → 역시 끝의 세 수의 곱이 가장 큰수
- 하나의 수만 양수 일 경우 → 처음 두 수와 마지막수 의 곱이 가장 큰수 arr[0] * arr[1] * arr[n-1]
- 두개의 수가 양수 일 경우 → 바로 알수 없다. 하지만 위의 두가지의 경우의 수가 가장 큰수 후보이다.

결국 두가지의 경우의 수를 비교하여 가장 큰수를 리턴하면 되는 것이다. 

하지만 곱하는 수의 갯수가 3개가 아니라 그이상일 경우 solve1 방식이 더 편리할 것으로 보인다.
*/
