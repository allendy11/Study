//? keyof
//? interface 의 key 값을 union 형태로 변경한다.
interface User {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}
type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
const keyName: UserKey = 'name'

//? Partial<T>
//? 프로퍼티를 optional 로 변경한다.
interface User2 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}
const admin: Partial<User>= { //! age 와 gender 가 없어도 에러가 나지 않는다
  id: 1,
  name: 'Bob',
}

//? Required<T>
//? 프로퍼티를 필수로 변경한다. (Partial 과 반대 개념)
interface User3 {
  id:number;
  name: string;
  age?: number
}
const admin2: Required<User3> = { //! age는 optional 이지만 Required 로 인해 에러 발생
  id:1,
  name: 'Bob',
}

//? Readonly<T>
//? 읽기전용으로 변경한다.
interface User4 { 
  id: number;
  name: string;
  age?: number;
}
const admin3: Readonly<User4> = {
  id: 1,
  name: 'Bob',
  age: 10,
}
admin3.age = 15 //! Readonly 이므로 수정 불가

//? Record<K,T>
//? 객체의 key 와 value 의 값 또는 type 을 결정한다.
type Grade = '1' | '2' | '3' | '4';
type Score = 'A' | 'B' | 'C' | 'F' ;

const score: Record<Grade, Score> = {
  1: 'A',
  2: 'B',
  3: 'F',
  4: 'A'
}
//
interface User5 { 
  id: number;
  name: string;
  age: number;
}
function isValid(user: User5) {
  const result: Record<keyof User5, boolean> = {
    id: user.id > 0,
    name: user.name !== '',
    age: user.age > 0,
  }
  return result;
}

//? Pick<T,K>
//? 특정 프로퍼티만 선택하여 사용가능하게 한다
//? Partial 과 유사하지만 Partial 은 모든 프로퍼티를 optional로 변경하지만 Pick은 반드시 특정 프로퍼티만을 필요할때 사용한다.
interface User6 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f'
}
const admin4: Pick<User, 'id' | 'name' > = {
  id: 0,
  name: 'Bob',
}

//? Omit<T,K>
//? 특정 프로퍼티를 제외 한다. (Pick 과 반대 개념)
const admit5: Omit<User6, 'name' | 'gender'> = {
  id: 1,
  age: 10,
}

//? Exclude<T1,T2>
//? T1의 타입에서 T2 타입을 제외
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; // type T2 = boolean

//? NonNullable<T>
//? null 과 undefined 타입을 제외 (Exclude 와 방식이 유사하다.)
type T3 = string | number | null | undefined;
type T4 = NonNullable<T3> // type T4 = string | number


