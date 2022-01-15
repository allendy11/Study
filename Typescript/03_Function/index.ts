//? function 함수

//? 선택적 매개변수
function hello(name? : string) { // TS
  return `Hello, ${name || "world"}`
}

function hello2(name = "world") { // JS 위와 같다
  return `Hello, ${name}`
}

function hello3(name : string, age? : number) : string {
  if(age !== undefined) {
    return `Hello, ${name}. You are ${age}`;
  } else {
    return `Hello, ${name}`;
  }
}
function hello4(age?: number, name: string) : string { //! 에러 선택적 매개변수는 앞에 올수 없다.
  if(age !== undefined) {
    return `Hello, ${name}. You are ${age}`;
  } else {
    return `Hello, ${name}`;
  }
}

//? rest parameter 
function add(...nums: number[]) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
add(1,2,3) // 6


//? this
interface User {
  name: string;
}
const Sam: User = {name: 'Sam'}
function showName(this: User) { // this 의 타입을 정해주기위해 함수의 첫번째 매개변수 자리에 this의 타입을 넣는다
  console.log(this.name)
}
const a = showName.bind(Sam);
a()

function showName2(this: User, age: number, gender: 'm' | 'f') { // 함수의 매개변수가 여러개일 경우 this의 타입을 첫번째 자리에 위치한다.
  console.log(this.name, age, gender)
}

//? overload
interface User2 { 
  name: string;
  age: number;
}
function join(name: string, age: number | string) : User2 | string {
  if(typeof age === 'number') {
    return {
      name, 
      age,
    }
  }else {
    return '나이는 숫자로 입력해주세요.'
  }
}

const sam: User2 = join('Sam', 30);  //! 에러 -> sam 과 jane 의 타입을 확정할수 없다
const jane: User2 = join('Jane', '25')


function join2(name: string, age: string) : string; // 이와 같이 쓰는것을 오버로드 라고 한다.
function join2(name: string, age: number) : User2
function join2(name: string, age: number | string) : User2 | string {
  if(typeof age === 'number') {
    return {
      name, 
      age,
    }
  } else {
    return '나이는 숫자로 입력해주세요.';
  }
}

const sam2: User2 = join2('Sam', 30);  
const jane2: string = join2('Jane', '30')
