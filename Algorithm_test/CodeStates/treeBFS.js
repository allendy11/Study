/*
# **treeBFS**

## **문제**

임의의 tree를 구성하는 노드 중 하나의 `Node` 객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

## **입력**

### **인자 1 : node**

- `'value'`, `'children'` 속성을 갖는 객체 (Node)
- `'node.value'`는 `number` 타입
- `'node.children'`은 Node를 요소로 갖는 배열

## **출력**

- 배열을 리턴해야 합니다.

## **주의사항**

- 생성자 함수(`Node`)와 메소드(`addChild`)는 변경하지 않아야 합니다.

## **입출력 예시**

```
let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]
```

*/

let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let queue = []; // [2,3]
  queue.push(node);
  while (queue.length > 0) {
    let now = queue.shift(); //now = node
    result.push(now.value);
    if (now.children) {
      now.children.forEach((el) => queue.push(el));
    }
  }
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
/*
## Note
bfs 기본 개념 문제

bfs 에서는 큐 라는 임시 공간을 사용하는 것이라 할 수 있다.

처음에 큐 에 들어가는 값을 생각 해야 하며

반복문을 통해 하나씩 제거하여 탐색후 새로운 값들을 큐에 다시 집어넣게 되는 반복작업을 하다가 더이상 큐에 값이 남아있지 않을 경우 반복문을 빠져 나오는 것이 일반적인 형태이다.
*/
