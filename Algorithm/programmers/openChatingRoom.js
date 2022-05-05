function solution(record) {
  var answer = [];
  let id = 0;
  for (let i = 0; i < record.length; i++) {
    let arr = record[i].split(" ");
    if (arr[0] === "Enter") {
      let userIdArr = answer.map((el) => (el = el.userId));
      if (userIdArr.includes(arr[1])) {
      } else console.log("no");
      var obj = {
        id,
        userId: arr[1],
        nickname: arr[2],
        message: `${arr[2]}님이 들어왔습니다.`,
      };
      answer.push(obj);
    } else if (arr[0] === "Leave") {
      var obj = {
        id,
        userId: arr[1],
        nickname: arr[2],
        message: `${arr[2]}님이 들어왔습니다.`,
      };
    } else if (arr[0] === "Change") {
    }
  }
  return answer;
}

let result = solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
// console.log(result);
