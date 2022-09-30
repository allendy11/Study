// function solution(n) {
//   var answer = "";
//   while (0 < n) {
//     let rest = n % 3;
//     let num = 0;
//     if (rest === 0) {
//       num = 4;
//       n = n / 3 - 1;
//     } else {
//         num = rest
//         n = Math.floor(n/3)
//     }
//     answer = String(num) + answer;
//   }
//   return answer;
// }

// let memo = ["1", "2", "4"];
// function solution(n) {
//   var answer = "";
//   while (0 < n) {
//     if (memo[n - 1]) {
//       answer = memo[n - 1] + answer;
//       return answer;
//     } else {
//       let rest = n % 3;
//       let num = 0;
//       if (rest === 0) {
//         num = 4;
//         n = n / 3 - 1;
//       } else {
//         num = rest;
//         n = Math.floor(n / 3);
//       }
//       answer = String(num) + answer;
//     }
//   }
//   memo[n - 1] = answer;
//   return answer;
// }

function solution(n) {
  let data = [1, 2, 4];
  if (n === 0) return "";
  return solution(Math.floor((n - 1) / 3)) + data[(n - 1) % 3];
}

// 2진법, 16진법처럼 3진법이라 생각하고 구할수있을것이라 생각됨 (x)
// 0이 없기 때문에 n진법처럼 계산불가
// 중복 가능한 문자열 집합과 관련이 있을듯 하다
// [a,b,c] ⇒ a,b,c,aa,ab,ac,ba,bb,bc,ca, ...
// 메모이제이션이 필요?
// 3^0 + 3^1 + 3^2 ... 추가 될때마다 자리수 변경
// 멱집합
let solve1 = solution(1);
let solve2 = solution(3);
let solve3 = solution(5);
let solve4 = solution(7);
let solve5 = solution(9);
console.log(solve1);
console.log(solve2);
console.log(solve3);
console.log(solve4);
console.log(solve5);
