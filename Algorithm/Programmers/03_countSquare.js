// function solution(w, h) {
//   if(w>=h) {
//     answer = w * h - (Math.ceil(w/h)*h);
//   } else {
//     answer = h * w - (Math.ceil(h/w)*w);
//   }
//   return answer;
// }
function solution(w, h) {
  var answer = 1;
  function gcd(a, b) {
    let r = a % b;
    if (r === 0) return b;
    return gcd(b, r);
  }
  answer = w * h - (w + h - gcd(w, h));
  return answer;
}

let result = solution(3, 5);
console.log(result);
