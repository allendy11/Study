// 생성자(Constructor) : 객체가 생성될때 호출되는 함수
// 소멸자(Destructor) : 객체가 소멸될때 호출되는 함수

// -호출순서 예시
#include <iostream>

using namespace std;

class MyClass
{
public:
  MyClass()
  {
    cout << "Constructor" << endl;
  }
  ~MyClass()
  {
    cout << "Destructor" << endl;
  }
};
void test()
{
  cout << "test start" << endl;
  MyClass obj;
  cout << "test end" << endl;
}

int main()
{
  cout << "main start" << endl;
  test();
  cout << "main end" << endl;
}
/*
  (1) main start -> (2) test start -> (3) Constructor -> (4) test end -> (5) Destructor -> (6) main end
  이것으로 보아 생성자는 객체를 생성할때 실행되고 객체를 생성한 함수가 끝나면 소멸자가 실행되는것을 알수있다.

  **전역객체를 호출하게 되면 가장 먼저 생성자가 실행되고 모든 함수가 끝난뒤에 소멸자가 실행된다.
*/

// 생성자는 멤버 변수를 초기화하는데 사용된다.
class Complex
{
public:
  Complex()
  {
    a = 0;
    b = 0;
  }
  // overloading
  Complex(double M, double N)
  {
    a = M;
    b = N;
  }

  /*
  45 ~ 55 하나로 합치는것이 가능하다 (매개변수 초기화)
  Complex(double M = 0, double N = 0) {
    ...
  }
  */
  void setA(double _a)
  {
    a = _a;
  }
  double getA()
  {
    return a;
  }
  void setB(double _b)
  {
    b = _b;
  }
  double getB()
  {
    return b;
  }

private:
  double a;
  double b;
};

int main()
{
  Complex C1;       // 파라미터가 없으므로 디폴트 클래스 호출
  Complex C2(2, 3); // overloading 된 클래스 호출
}