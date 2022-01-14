// JS vs TS
// JS 는 정적언어로 런타임에 타입이 결정된다. -> 실행시 오류발견 (사용자가 개발자의 오류를 확인)
// TS 는 동적언어로 컴파일 타임에 타입이 결정된다. -> 코드 작성시 오류 발견 (개발중에 오류 확인 가능)

// 기본 타입
let age: number; age = 1
let isAdult: boolean; isAdult = true
let a: number[]; let a2:Array<number>; a = [1,2,3]
let b: string[]; let b2:Array<string>; b = ['a','b','c']

// Tuple
// Tuple(튜플)은 길이와 타입이 고정된 배열을 의미한다.
let tuple: [string, number]
tuple = ['a', 1]

// void, never
// void 는 함수의 리턴값이 존재하지않는 경우
// never 은 함수가 에러를 리턴하는 경우이거나 무한 루프인 경우
function hello(): void { 
  console.log('hello')
}
function loop(): never {
  while(true){
    //...
  }
}

// enum vs 객체 
// enum 은 객체라고 할수 있지만 가장 큰 차이점은 객체는 키에 대한 값(value)를 자유롭게 변경 가능한데 반해, enum 은 변경 불가
enum Os {
  Window,
  Ios,
  Android
}
let myOs: Os = Os.Window;

// null, undefined
let c: null = null;
let d: undefined = undefined;

// type
// 특정 값의 제한을 둘때 사용한다.
type Score = 'A' | 'B' | 'C' | 'F';
let myScore :Score = 'A'
let myScore2 :Score = 'D' //! 에러