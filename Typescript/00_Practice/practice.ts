var myname = (name: string): string => name;
myname("jane"); // jane

type Color = (color: string) => string;
var myColor: Color = (color: string) => color;
myColor("red"); // red

type Car<T> = () => T;
var myCar: Car<string> = () => "x5";

function myCar2<T>() {}

function myPrint<T>(a: T[]) {
  return a[0];
}
