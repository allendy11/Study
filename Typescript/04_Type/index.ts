//? Literal Type , Union Type , Intersection Type

//? Literal Type
// 리터럴 이란 변하지 않는 데이터값이라 할 수 있다.
// const a = 3 에서 a 는 상수 3은 리터럴이며 그값이 숫자면 숫자 리터럴 문자열이면 문자열 리터럴이라 한다.
// 타입 스크립트에서 type 을 이용하여 특정값을 제한하는 용도로 사용할 수 있다.
type Job = "police" | "developer" | 'teacher'
// 여기서 | 을 사용한경우 유니온 타임이라 하며 || 와 같은 의미를 가지고 && 에 해당하는 것을 교차타입이라 하며 &로 표현한다.
interface User {
  name: string;
  job: Job;
}
const user: User = {
  name: 'kim',
  job: 'developer'
}
const user2: User = {
  name: 'park',
  job: 'student' //! 에러 -> 
}

//? Union Type
interface Car {
  name: 'car';
  color: string;
  start(): void;
}
interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}
function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  gift.start() //! Mobile 에는 start 함수가 존재하지 않으므로 분기를 두어서 작성한다.
}
  function getGift2(gift: Car | Mobile) {
  console.log(gift.color);
  if(gift.name === 'car') {
    gift.start() 
  } else {
    gift.call()
  }
}

//? Intersection Type

interface Car2 {
  name: string;
  start();
}
interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar : Toy & Car2 = {
  name: 'toy',
  color: 'red',
  price: 1000,
  start() {
    console.log('go')
  }

}