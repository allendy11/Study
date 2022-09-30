//! try1
// function solution(s) {
//   var answer = 0;
//   let arr = s.split("");
//   while (arr.length) {
//     for (let i in arr) {
//       if (arr[i] === arr[Number(i) + 1]) {
//         arr.splice(i, 2);
//         if (arr.length === 0) return 1;
//         break;
//       }
//       if (i == arr.length - 1) return answer;
//     }
//   }
// }  //! 실패

//! try2
// function solution(s) {
//   var answer = 0;
//   let stack = [];
//   let compare = "";

//   for (let i = 0; i < s.length; i++) {
//     if (stack.length) compare = stack[stack.length - 1];
//     else {
//       stack.push(s[i]);
//       continue;
//     }
//     if (compare === s[i]) {
//       stack.pop();
//     } else {
//       stack.push(s[i]);
//     }
//   }
//   answer = stack.length ? 0 : 1;

//   return answer;
// } //? 통과

//! try3
// function solution(s) {
//   let stack = [];
//   for (let word of s) {
//     if (stack.length === 0) {
//       stack.push(word);
//       continue;
//     }
//     if (word === stack[stack.length - 1]) {
//       stack.pop();
//     } else {
//       stack.push(word);
//     }
//   }
//   return stack.length === 0 ? 1 : 0;
// } //! 정확도 통과, 효율성 실패

//! try3.1
function solution(s) {
  let stack = [];
  for (let word of s) {
    if (stack.length === 0) {
      stack.push(word);
    } else if (word === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(word);
    }
  }
  return stack.length === 0 ? 1 : 0;
} //? 통과

let result1 = solution("baabaa");
let result2 = solution("cdcd");
let result3 = solution("");
let result4 = solution("aaa");
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
