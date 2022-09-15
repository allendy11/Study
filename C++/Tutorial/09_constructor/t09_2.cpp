// 생성자의 매개변수를 축약할수있다.
#include <iostream>

using namespace std;

class Complex
{
public:
  Complex() : a(0), b(0) {}
  Complex(double A, double B) : a(A), b(B) {}

  Complex(double a, double b) : a(a), b(b) {} // 매개변수와 전달인자의 위치가 정해져있으므로 같은이름을 사용하더라도 에러가 발생하지 않는다.

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