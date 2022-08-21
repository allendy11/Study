/*
# **powerSet**

## **문제**

하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.

## **입력**

### **인자 1 : str**

- `string` 타입의 공백이 없는 알파벳 소문자 문자열

## **출력**

- 배열(`arr`)을 리턴해야 합니다.
- `arr[i]`는 각 부분집합의 원소로 구성된 문자열

## **주의사항**

- `arr[i]`는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
- `arr[i]`는 알파벳 순서로 정렬되어야 합니다.
- 집합은 중복된 원소를 허용하지 않습니다.
- 부분집합은 빈 문자열을 포함합니다.
- `arr`은 사전식 순서(lexical order)로 정렬되어야 합니다.

## **입출력 예시**

```
let output1 = powerSet('abc');
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet('jjump');
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp'
```

## pseudocode

부분집합 → dfs

중복된 알파벳 → 중복 제거

빈문자열 포함  → dfs(0, ‘’)

결과값은 사전식으로 정렬 → result.sort()

*/

const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = str.split("").sort();
  let set = new Set(arr);
  let newArr = [...set];
  let newStr = newArr.join("");
  let result = [];

  function dfs(depth, str) {
    if (depth === newStr.length) {
      result.push(str);
    } else {
      dfs(depth + 1, str);
      dfs(depth + 1, str + newStr[depth]);
    }
  }
  dfs(0, "");
  return result.sort();
};

/* 
## Note
dfs 변형문제라 할수있다. 

dfs는 depth 에 따른 요소를 어떻게 할것인지 생각해야 한다.

depth 가 끝나면 어떻게 할지, 그전에는 어떻게 재귀를 할지가 변형문제에 따라 달라지는듯 하다.
*/
