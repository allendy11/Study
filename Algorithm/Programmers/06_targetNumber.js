function solution(numbers, target) {
  var answer = 0;
  let isValid = new Array(numbers.length).fill(true);
  let subsets = [];
  const DFS = (depth) => {
    if (depth === numbers.length) {
      let subset = [...numbers];
      for (let i in numbers) {
        if (!isValid[i]) {
          subset[i] *= -1;
        }
      }
      subsets.push(subset);
      return;
    }
    isValid[depth] = false;
    DFS(depth + 1);

    isValid[depth] = true;
    DFS(depth + 1);
  };
  DFS(0);
  for (let i in subsets) {
    let sum = subsets[i].reduce((acc, cur) => acc + cur, 0);
    if (sum === target) answer += 1;
  }
  return answer;
}
