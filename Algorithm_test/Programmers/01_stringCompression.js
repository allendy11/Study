function solution(s) {
  var answer = 0;
  answer = s.length;
  for (let i = 1; i <= s.length / 2; i++) {
    let str = "";
    let partStr1 = s.slice(0, i);
    let cnt = 1;
    for (let j = i; j < s.length; j += i) {
      let partStr2 = s.slice(j, j + i);
      if (partStr1 === partStr2) {
        cnt += 1;
      } else {
        str += cnt === 1 ? partStr1 : cnt + partStr1;
        partStr1 = partStr2;
        cnt = 1;
      }
    }
    str += cnt === 1 ? partStr1 : cnt + partStr1;
    answer = Math.min(answer, str.length);
  }
  return answer;
}
let str1 = "aabbaccc";
let str2 = "ababcdcdababcdcd";
let str3 = "abcabcdede";
let str4 = "abcabcabcabcdededededede";
let str5 = "xababcdcdababcdcd";

let result1 = solution(str1);
let result2 = solution(str2);
let result3 = solution(str3);
let result4 = solution(str4);
let result5 = solution(str5);

console.log(result1 === 7);
console.log(result2 === 9);
console.log(result3 === 8);
console.log(result4 === 14);
console.log(result5 === 17);
