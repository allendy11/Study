/*
## **문제**

아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.

- 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

## **입력**

### **인자 1 : n**

- `number` 타입의 n (n은 0 이상의 정수)

## **출력**

- `number` 타입을 리턴해야합니다.

## **주의사항**

- **재귀함수를 이용해** 구현해야 합니다.
- 반복문(`for`, `while`) 사용은 금지됩니다.
- 함수 `fibonacci`가 반드시 재귀함수일 필요는 없습니다.

## **입출력 예시**

```jsx
let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
```

## **Advanced**

- 피보나치 수열을 구하는 효율적인 알고리즘(`O(N)`)이 존재합니다. 재귀함수의 호출을 직접 관찰하여 비효율이 있는지 확인해 보시기 바랍니다.

## 풀이

*/
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
## Note

이것이 일반적으로 알고 있는 피보나치이다. 하지만 이것의 시간복잡도는 O(2^n) // 매 리턴마다 2번의 재귀를 돌기때문이다

하지만 피보나치를 살펴보면 중복되는 값이 계속 발생하게 되는데 이러한 불필요한 연산을 제거하기 위해서는 한번이라도 구한값은 저장하게 만드는 방법이 있다. 

이것을 Memoization 이라 하며 주어진 입력값에 대한 결과를 저장함으로써 같은 입력값에 대해 함수가 한 번만 실행되도록 하는것이다. 

다음이 Memoization을 이용한 것이다.
*/

function fibonacci(n) {
  let memo = [0, 1];
  const aux = (n) => {
    if (memo[n] !== undefined) return memo[n];
    else {
      memo[n] = aux(n - 1) + aux(n - 2);
      return memo[n];
    }
  };
  return aux(n);
}
