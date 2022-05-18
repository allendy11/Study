//? Generic

// 왜 사용하는가
type Print = {
  (name: string): string;
  (name: number): string;
  (name: number): number;
  (name: boolean): boolean;
};
const havePrint: Print = (name) => name;

type Print2<T> = {
  (name: T): T;
};
const havePrint2: Print2<string> = (name) => name;
// Print -> Print2 표현가능해진다.

// 함수 타입
type Print3 = <T>(a: T[]) => T;
const havePrint3: Print3 = (a) => a[0];
const result3 = havePrint3([1, 2, 3]);

// 위의 경우를 줄여서 표현
function Print4<T>(a: T[]) {
  return a[0];
}
const result4 = Print4([1, 2, 3, 4]);

// 객체 타입
type Obj<T> = {
  name: string;
  todo: T;
};
const a: Obj<number> = {
  name: "jane",
  todo: 1,
};
