//? class

class Car {
  constructor(color) {
    this.color = color;
  }
  start() {
    console.timeLog("start");
  }
}
const bmw = new Car("red"); // JS 에서는 문제가 업지만 TS 에서는 수정필요

class Car2 {
  color: string; //! 변수를 미리 선언해서 해결
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
  }
}
const bmw2 = new Car2("red");

// public, readonly 를 이용하면 변수를 미리 선언하지 않아도 된다.
class Car3 {
  constructor(public color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
  }
}
class Car4 {
  constructor(readonly color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
  }
}

//? 접근 제한자 (Access modifier) : public, private, protected
class Car5 {
  name: string = "Car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
    console.log("this.name");
  }
}
class Bmw extends Car5 {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    console.log(super.name); // 자식 클래스에서 name 접근가능 -> public
  }
}

class Car6 {
  public name: string = "Car"; // public 은 넣거나 생략가능
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
    console.log("this.name");
  }
}
class Bmw2 extends Car6 {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    console.log(super.name);
  }
}
// private
class Car7 {
  private name: string = "Car"; // private
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
    console.log(this.name); // private 선언한 내부에서 접근가능
  }
}
class Bmw3 extends Car7 {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    console.log(super.name); //! 상속한 클래스에서 조차 접근 불가능
  }
}
// private 대신 # 으로 대체 가능 (private 와 동일하게 작동)
class Car8 {
  #name: string = "Car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
    console.log(this.#name);
  }
}
class Bmw4 extends Car8 {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    console.log(super.#name);
  }
}
// protected
class Car9 {
  name: string = "Car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
    console.log(this.name);
  }
}
class Bmw5 extends Car9 {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    console.log(super.name); //? 상속한 클래스에서는 접근 가능
  }
}
const z4 = new Car9("red");
console.log(z4.name); // public 에서는 클래스 인스턴스 접근 가능

class Car10 {
  protected name: string = "Car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
    console.log(this.name);
  }
}
class Bmw6 extends Car10 {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    console.log(super.name);
  }
}
const z4_1 = new Car10("red");
console.log(z4_1.name); // protected 에서는 클래스 인스턴스 접근 불가

// readonly
class Car11 {
  readonly name: string = "Car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
    console.log(this.name);
  }
}
class Bmw7 extends Car11 {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    console.log(super.name);
  }
}
const z4_2 = new Car11("red");
console.log(z4_2.name); // readonly 는 인스턴스에서 접근 가능
z4_2.name = "bike"; //! 수정은 불가

//? 결론
//? public - 자식 클래스 , 클래스 인스턴스 모두 접근 가능
//? protected - 자식 클래스 접근 가능
//? private - 해당 클래스에서만 접근 가능
//? readonly - 자식 클래스 , 클래스 인스턴스 모두 접근 가능 (수정 불가)

// static
class Car12 {
  readonly name: string = "Car";
  color: string;
  static wheels: 4;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
    console.log(this.name);
    console.log(this.wheels); // static 은 this 사용 불가 , 클래스 이름을 통해 접근 가능
    console.log(Car12.wheels);
  }
}
class Bmw8 extends Car12 {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    console.log(super.name);
  }
}
const z4_3 = new Car12("red");
console.log(z4_3.name);
console.log(z4_3.wheels); // static : 클래스 이름을 통해 접근 가능
console.log(Car12.wheels);

// 추상 클래스
abstract class Car13 {
  readonly name: string = "Car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start(): void {
    console.log("start");
    console.log(this.name);
  }
  abstract stop(): void; //! 추상클래스 내부의 추상 메소드는 상속된 클래스에서 구체적인 내용이 들어간다
}
class Bmw9 extends Car13 {
  constructor(color: string) {
    super(color);
  }
  showName(): void {
    console.log(super.name);
  }
  stop() {
    console.log("stop"); //! 추상클래스 내부의 추상 메소드는 상속된 클래스에서 구체적인 내용이 들어간다
  }
}
const z4_4 = new Car13("red"); //! 추상클래스는 인스턴스 생성 불가
const z4_5 = new Bmw9("red");
console.log(z4_4.name);
