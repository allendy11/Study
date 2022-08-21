// function solution(record) {
//   var answer = [];
//   let id = 0;
//   for (let i = 0; i < record.length; i++) {
//     let arr = record[i].split(" ");
//     if (arr[0] === "Enter") {
//       let userIdArr = answer.map((el) => (el = el.userId));
//       if (userIdArr.includes(arr[1])) {
//       } else console.log("no");
//       var obj = {
//         id,
//         userId: arr[1],
//         nickname: arr[2],
//         message: `${arr[2]}님이 들어왔습니다.`,
//       };
//       answer.push(obj);
//     } else if (arr[0] === "Leave") {
//       var obj = {
//         id,
//         userId: arr[1],
//         nickname: arr[2],
//         message: `${arr[2]}님이 들어왔습니다.`,
//       };
//     } else if (arr[0] === "Change") {
//     }
//   }
//   return answer;
// }

// function solution(record) {
//   var answer = [];
//   let objArr = [];
//   let tempArr = [];
//   function enterMessage(objArr) {
//     let result = [];
//     for (let i = 0; i < objArr.length; i++) {
//       if (objArr[i].action === "Enter") {
//         result.push(`${objArr[i].nickname}님이 들어왔습니다.`);
//       } else if (objArr[i].action === "Leave") {
//         result.push(`${objArr[i].nickname}님이 나갔습니다.`);
//       }
//     }
//     return result;
//   }
//   for (let i = 0; i < record.length; i++) {
//     tempArr = record[i].split(" ");
//     if (tempArr[0] === "Enter") {
//       var filteredArr = objArr.filter((el) => el.userId === tempArr[1]);
//       if (filteredArr) {
//         filteredArr.forEach((el) => {
//           if (el.nickname !== tempArr[2]) {
//             el.nickname = tempArr[2];
//           }
//         });
//       }
//       var obj = {
//         id: i,
//         userId: tempArr[1],
//         nickname: tempArr[2],
//         action: "Enter",
//       };
//       objArr.push(obj);
//     } else if (tempArr[0] === "Leave") {
//       var filteredArr = objArr.filter((el) => el.userId === tempArr[1]);
//       var nickname = "";
//       if (filteredArr) {
//         nickname = filteredArr[0].nickname;
//       }
//       var obj = {
//         id: i,
//         userId: tempArr[1],
//         nickname,
//         action: "Leave",
//       };
//       objArr.push(obj);
//     } else if (tempArr[0] === "Change") {
//       objArr
//         .filter((el) => el.userId === tempArr[1])
//         .map((ele) => {
//           ele.nickname = tempArr[2];
//         });
//     }
//   }
//   answer = enterMessage(objArr);
//   return answer;
// }

// function solution(record) {
//   var answer = [];
//   let userData = [];
//   let userLog = [];
//   for (let i = 0; i < record.length; i++) {
//     let tempArr = record[i].split(" ");
//     if (tempArr[0] === "Enter") {
//       let [filteredUser] = userData.filter((el) => el.userId === tempArr[1]);
//       if (filteredUser) {
//         if (filteredUser.nickname !== tempArr[2]) {
//           filteredUser.nickname = tempArr[2];
//         }
//       } else {
//         userData.push({ userId: tempArr[1], nickname: tempArr[2] });
//       }
//       userLog.push({ userId: tempArr[1], action: tempArr[0] });
//     } else if (tempArr[0] === "Leave") {
//       userLog.push({ userId: tempArr[1], action: tempArr[0] });
//     } else if (tempArr[0] === "Change") {
//       let [filteredUser] = userData.filter((el) => el.userId === tempArr[1]);
//       filteredUser.nickname = tempArr[2];
//     }
//   }
//   for (let j = 0; j < userLog.length; j++) {
//     let [user] = userData.filter((el) => el.userId === userLog[j].userId);
//     if (userLog[j].action === "Enter") {
//       answer.push(`${user.nickname}님이 들어왔습니다.`);
//     } else if (userLog[j].action === "Leave") {
//       answer.push(`${user.nickname}님이 나갔습니다.`);
//     }
//   }
//   return answer;
// }
// function solution(record) {
//   var answer = [];
//   let userData = {};
//   let userLog = [];
//   for (let i = 0; i < record.length; i++) {
//     const [action, userId, nickname] = record[i].split(" ");
//     if (nickname) {
//       userData[userId] = nickname;
//     }
//     if (action === "Enter" || "Leave") {
//       userLog.push({
//         userId,
//         action,
//       });
//     }
//   }
//   for (let j = 0; j < userLog.length; j++) {
//     if (userLog[j].action === "Enter") {
//       answer.push(`${userData[userLog[j].userId]}님이 들어왔습니다.`);
//     } else if (userLog[j].action === "Leave") {
//       answer.push(`${userData[userLog[j].userId]}님이 나갔습니다.`);
//     }
//   }
//   return answer;
// }

function solution(record) {
  var answer = [];
  let userData = {};
  let userLog = [];
  record.forEach((el) => {
    const [action, userId, nickname] = el.split(" ");
    if (nickname) {
      userData[userId] = nickname;
    }
    if (action === "Enter" || "Leave") {
      userLog.push({ userId, action });
    }
  });
  userLog.forEach((el) => {
    if (el.action === "Enter") {
      answer.push(`${userData[el.userId]}님이 들어왔습니다.`);
    } else if (el.action === "Leave") {
      answer.push(`${userData[el.userId]}님이 나갔습니다.`);
    }
  });
  return answer;
}

let result = solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
  "Leave uid4567",
]);
console.log(result);
