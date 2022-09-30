/*
## **문제**

세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다. 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.

## **입력**

### **인자 1 : n**

- `number` 타입의 1 이상의 자연수

## **출력**

- `number` 타입을 리턴해야 합니다.

## **주의사항**

- 타일을 가로, 세로 어느 방향으로 놓아도 상관없습니다. (입출력 예시 참고)

## **입출력 예시**

```
let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5

2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d
------------

2 | a a c c
1 | b b d d
------------

2 | a b c c
1 | a b d d
------------

2 | a a c d
1 | b b c d
------------

2 | a b b d
1 | a c c d
------------


## **Advanced**

- 타일링 문제를 해결하는 효율적인 알고리즘(`O(N)`)이 존재합니다. 반드시 직접 문제를 해결하시면서 입력의 크기에 따라 어떻게 달라지는지 혹은 어떻게 반복되는지 관찰하시기 바랍니다.

*/

let tiling = function (n) {
  let data = [1, 2, 3];
  const recursion = function (i) {
    if (data[i] !== undefined) {
      return data[i];
    } else {
      data[i] = recursion(i - 1) + recursion(i - 2);
      return data[i];
    }
  };
  return recursion(n - 1);
};
/*
## Note

첫번째 타일이 세로일때 경우의 수는 n-1 의 경우의 수와 같고

첫번째 타일이 가로면 두번째 타일도 자동적으로 가로가 되므로 보드의 2칸을 제외한 경우의 수 즉 n-2의 경우의 수와 같으므로 총 경우의 수는 두가지를 합한 것과 같다

복잡해 보이지만 몇차례 시도해보면 피보나치와 동일하다는 것을 알 수 있다.
*/
