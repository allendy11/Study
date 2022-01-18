//? Generic vs union (overload)
//? 함수 선언시 지정한 변수 타입과 호출시 변수 타입이 바뀔때 union (overload) 을 사용할 수 있지만 함수 호출 시 수시로 변수 타입을 변경하고자 할때 Generic 을 사용한다.
// 코드의 재사용 용이하다

function getSize<T>(arr: T[]): number {
  return arr.length
}
const arr1 = [1,2,3]
getSize<number>(arr1)
const arr2 = ['1','2','3']
getSize<string>(arr2)
const arr3 = [true,false,false]
getSize<boolean>(arr3)
const arr4 = [1,2,'3']
getSize<number | string>(arr4)
const arr5 = [1,2,{a: 3,b:'4'}]
getSize<number | {a: number | string}>(arr5)
const arr6 = [1,2,{a: 3},{b:'4'}]
getSize<number | {a: number} | {b: string}>(arr6)

//? 예시 (클래스 내부 파라미터 값의 타입을 확신 할수 없는 경우)
interface Mobile2<T> {
  name: string;
  price: number;
  option: T;
}
const m1:Mobile2<{color:string, coupon:boolean}> = {
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false
  }
}
const m2:Mobile2<string> = {
  name: 's20',
  price: 500,
  option: 'good'
}

//? 예시 (여러개의 클래스를 포괄하는 함수를 작성할때 타입이 다를 경우)
interface User_1 {
  name: string;
  age: number
}
interface Car_1 {
  name: string;
  color: string;
}
interface Book_1 {
  price: number  // name 이 존재하지 않는다
}
const user_1: User_1 = {name: 'a', age: 10}
const car: Car_1 = {name:'b', color:'red'}
const book: Book_1 = {price: 1000}

function showName(data): string {
  return data.name
}
showName(user_1)
showName(car)
showName(book) //! book 에는 name이 없으므로 오류가 발생해야 하지만 정상 작동

function showName2<T>(data:T): string {
  return data.name //! 에러 T 에는 name이 존재하지 않는다
}
showName2(user_1)
showName2(car)
showName2(book)

function showName3<T extends {name: string} >(data: T): string {
  return data.name
}
showName3(user_1)
showName3(car)
showName3(book) //! 정상적으로 오류 발생

