//? 변수
let num: number;
num = 1;
num = "a"; //err
let str: string;
str = "aa";
str = 2; //err


//? 배열
let arr1: string[];
arr1.push("a");
arr1.push(1); // err

let arr2: number[];
arr2.push(1);
arr2.push("a"); // err

let arr3: (string | number)[];
arr3.push("a");
arr3.push(3);


//? 함수 (interface)
interface action {
  ():void
}
const study:action = () => console.log("I'm study JS")
//? 객체 (interface)
let obj1: string{} // 이거아님

interface student {
  grade: number,
  score: string,
}
let mike: student = {
  grade: 1,
  score: 'A',
}


// enum action {
//   walk ='걷기',
//   run = '뛰기',
//   buy = '구매',
//   play = '연주'
// }
// let obj2: action = action.walk
