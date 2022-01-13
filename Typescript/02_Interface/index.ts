// Interface 
//? 객체를 생성하는 경우
let user: object = {
  name: 'user',
  age: 10
}
console.log(user.age) //! 에러 발생 (object에는 프로퍼티가 존재하지 않음)

//? 이때 사용하는것이 Interface 이다.
interface User {
  name: string;
  age: number;
}
let user2: User = {
  name: 'user2',
  age: 20
}
console.log(user2.age) // 30
user2.age = 10; 
//? 값은 변경 가능하다. // 변경 불가능하게 하려면 readonly를 사용해야된다. (아래로)

//? 프로퍼티를 추가하는 경우
let user3: User = {
  name: 'user3',
  age: 30
}
user3.gender = 'male' //! 에러 

let user4: User = {
  name: 'user4',
  age: 40,
  gender: 'male' //! 에러
}
//? interface에서 존재하지 않는 프로퍼티는 추가 불가

//? 물음표를 사용하여 optional(선택적) 으로 가능하게 할 수 있다.
interface User2 {
  name: string;
  age: number;
  gender? : string;
}
let user5: User2 = {  
  name: 'user5',
  age: 50,
  //! gender 가 없어도 에러가 발생하지 않음
} 

//? readonly
interface User3 {
  name: string;
  age: number;
  readonly birth: number;
}
let user6: User3 = {
  name: 'user6',
  age: 15,
  birth: 1999,
}
console.log(user6.birth) // 1999
user6.birth = 2000 //! 에러 readonly이므로 변경 불가