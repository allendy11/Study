// function solution(priorities, location) {
//   var answer = 0;
//   let target = priorities[location]
//   let queue = priorities.map((el, idx) => [idx, el])
//   while(queue.length) {
//       if(queue.length === 1) {
//           return 1
//       }
//       let current = queue.shift()
//       for(let arr of queue) {
//           let [idx, num] = arr
//           if(current[1] < num) {
//               queue.push(current)
//               current = null;
//               break;
//           }
//       }
//       if(current !== null) {
//           answer += 1;
//           if(current[0] === location) {
//               return answer
//           }
//       }
//   }
// } //! failed

function solution(priorities, location) {
  var answer = 0;
  let target = priorities[location];
  let queue = priorities.map((el, idx) => [idx, el]);

  while (queue.length) {
    let important = Math.max(...queue.map((el) => el[1]));
    let [idx, num] = queue.shift();
    if (num < important) {
      queue.push([idx, num]);
    } else if (num === important) {
      answer += 1;
      if (idx === location) return answer;
    }
  }
} //? pass

//? another method
// function solution(priorities, location) {
//   var answer = 0;
//   let queue = priorities.map((el,idx) => {return {idx, val:el}})

//   while(queue.length) {
//       let current = queue.shift()
//       if(queue.some(el => el.val > current.val)) {
//           queue.push(current)
//       } else {
//           answer += 1;
//           if(current.idx == location) {
//               return answer
//           }
//       }
//   }
// }
let priorities = new Array(100).fill();
let location = 80;
console.log(solution(priorities, location) === 81);
