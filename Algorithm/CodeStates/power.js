/* 
## **문제**

두 수를 입력받아 거듭제곱을 리턴해야 합니다.

## **입력**

### **인자 1: base**

- `number` 타입의 자연수 (`base` >= 2)

### **인자 2: exponent**

- `number` 타입의 정수 (`exponent` >= 0)

## **출력**

- `number` 타입을 리턴해야 합니다.
- 실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.

## **주의사항**

- `Math.pow`, 거듭제곱 연산자 사용은 금지됩니다.
- 시간복잡도 `O(logN)`을 만족해야 합니다.
- 나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다. 하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 됩니다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.

## **입출력 예시**

```
let output = power(3, 40);
console.log(output); // --> 19334827
```

## pseudocode

base 의 거듭제곱이 실행될때마다  94,906,249 로 나눈 나머지를 구한다.

그 나머지에서 base를 곱하고 다시  94,906,249 로 나눈 나머지를 구한다.

시간복잡도(0(logN) 을 만족하기 위해서는 작업 횟수를 반으로 줄여야 한다.

- 예를 들어 2^10 을 구하게 되면 2를 10번 곱하는것은 일반적인 횟수 → 0(N)
- 2^10 = 2^5 * 2^5 = (2^2 * 2^2 *2) * (2^2 * 2^2 *2) = ((2^1 * 2^1 * 2^1 * 2^1) * 2) * ((2^1 * 2^1 * 2^1 * 2^1) * 2) → 0(logN)
- 지수를 반으로 쪼갠다
    - 짝수이면 그대로
    - 홀수면 base를 한번 곱해야한다.
*/

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  // let mid = parseInt(exponent /2) ;
  let mid = Math.floor(exponent / 2);
  let midBase = power(base, mid);
  // let midBase = (power(base, mid) * power(base, mid)) %94906249
  let result = (midBase * midBase) % 94906249;

  if (exponent % 2 === 1) {
    result = (result * base) % 94906249;
  }
  return result;
}
