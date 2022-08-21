/*
## **문제**

두 개의 배열(`base`, `sample`)을 입력받아 `sample`이 `base`의 부분집합인지 여부를 리턴해야 합니다.

## **입력**

### **인자 1 : base**

- `number` 타입을 요소로 갖는 임의의 배열
- `base.length`는 100 이하

### **인자 2 : sample**

- `number` 타입을 요소로 갖는 임의의 배열
- `sample.length`는 100 이하

## **출력**

- `boolean` 타입을 리턴해야 합니다.

## **주의사항**

- `base`, `sample` 내에 중복되는 요소는 없다고 가정합니다.

## **입출력 예시**

```
let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
```

## **Advanced**

- 시간 복잡도를 개선하여, Advanced 테스트 케이스(`base`, `sample`의 길이가 70,000 이상)를 통과해 보세요.
*/
const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  const compare = (arr, el, idx) => {
    for (let i = idx; i < arr.length; i++) {
      if (el === arr[i]) {
        return i;
      } else if (el < arr[i]) {
        return -1;
      }
    }
    return -1;
  };
  let idx = 0;
  for (let i = 0; i < sample.length; i++) {
    idx = compare(base, sample[i], idx);
    if (idx === -1) {
      return false;
    }
  }
  return true;
};

/*
## Note
sample 의 배열이 base 배열에 모두 포함 되는지 여부를 묻는 것이다.
주어지는 두 배열은 정렬이 되어있지 않고 정렬하는 것이 결과에 영향을 미치지 않으므로 풀기 쉽게 정렬을 한다.

sample의 요소를 하나씩 base에 대입하여 존재하는지 확인하여 true/false 를 반환한다. 
*/
