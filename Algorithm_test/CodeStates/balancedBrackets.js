/*
## **문제**

문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를 리턴해야 합니다.

- 다음 단계에 맞춰 함수를 작성해 보세요
    1. 괄호의 종류를 단 한가지로 한정합니다.
    2. 괄호의 종류를 늘려 모든 종류의 괄호에도 작동하도록 합니다.
    3. 괄호를 제외한 문자열이 포함된 경우에도 작동하도록 합니다.

## **입력**

### **인자 1 : str**

- `string` 타입의 괄호가 포함된 문자열

## **출력**

- `boolean` 타입을 리턴해야 합니다.

## **주의사항**

- 괄호의 종류는 `(, )`만 고려합니다.
- 괄호는 먼저 열리고(`(`), 열린만큼만 닫혀야(`)`) 합니다.
- 빈 문자열을 입력받은 경우, `true`를 리턴해야 합니다.

## **입출력 예시**

```
let output = balancedBrackets('(');
console.log(output); // // -> false

output = balancedBrackets('()');
console.log(output); // --> true
```

## **Advanced**

- 모든 종류의 괄호(`(, ), {, }, [, ]`)가 포함된 문자열을 입력빋아 모든 괄호의 짝이 맞는지 여부를 리턴해 보세요.

```
let output = balancedBrackets('[](){}');
console.log(output); // --> true

output = balancedBrackets('[({})]');
console.log(output); // --> true

let output3 = balancedBrackets('[(]{)}');
console.log(output); // --> false
```
*/
/*
## pseudocode

- 닫힌 괄호가 나올때 마다 결정된다. → 열린괄호 , 닫힌괄호를 구분
- 처음 닫힌 괄호가 나오면 마지막 열린괄호와 비교 → stack
    - 반복문 이용
        - 열리괄호를 스택에 넣는다
        - 닫힌괄호가 나오면 스택의 마지막 괄호와 비교
            - 다를경우 false
    - 반복문이 끝난 후 스택이 비어있으면 true, 아니면 false
*/
const balancedBrackets = function (str) {
  //반복문을 다돌게되면 return true
  //반복문 안에서 false 되는 경우를 조건문으로
  let openBrackets = ["(", "{", "["];
  let closeBrackets = [")", "}", "]"];
  let stack = [];
  function changeBrackets(str) {
    if (str === "(") return ")";
    else if (str === "{") return "}";
    else if (str === "[") return "]";
  } // {{{((((
  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (str[i] === changeBrackets(stack.pop())) {
      } else return false;
    }
  }
  if (stack.length === 0) return true;
  else return false;
};
// '[(]{)}' false
// '[({})]' true
// '[](){}' true
// '[]}{()' false stack = [}]

// 열린괄호 닫힌괄호 구분
// 열린괄호를 스택에 푸시
// 닫힌괄호가 나왔을때 스택의 마지막요소랑 비교
