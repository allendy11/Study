function solution(progresses, speeds) {
  var answer = [];
  let queue = [];
  for (let i in progresses) {
    queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let deploy = queue.shift();
  answer = [1];

  while (queue.length) {
    if (queue.length === 0) return answer;
    let Q = queue.shift();
    if (deploy >= Q) {
      answer[answer.length - 1] += 1;
    } else {
      answer.push(1);
      deploy = Q;
    }
  }
  return answer;
}

/* 
pseudocode
배포가능 날짜 (date)= Math.ceil(( 100 - progress ) / speed )
queue.push(date) 
firstDeploy = queue.shift()
answer.push(1)
while(queue.length > 0) {
  deQ = queue.shift()  
  if(queue.length === 1) return answer
  if( firstDeploy >= deQ) {
    queue.shift()
    answer[answer.length-1] +=1
  } 
}
return answer
*/
