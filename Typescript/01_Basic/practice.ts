//? 변수 (explicit type)
let num: number;
num = 1;
num = "a"; //err
let str: string;
str = "aa";
str = 2; //err

//? 함수 (function)
let study: () => void;
study = () => {
  console.log("study");
};

let overAge: (age: number) => boolean;
overAge = (age: number) => age > 20;

//? 배열 (array)
let arr1: string[];
arr1.push("a");
arr1.push(1); // err

let arr2: number[];
arr2.push(1);
arr2.push("a"); // err

let arr3: (string | number)[]; // union type
arr3.push("a");
arr3.push(3);

//? 객체 (object)
let obj: { name: string; age: number; class?: string[] };
obj = {
  name: "James",
  age: 10,
  class: ["Math", "Eng", "JS"],
};

//? Dynamic type
let all: any;
all = 1;
all = "a";
all = true;
all = [];
all = {};
all = () => {};
