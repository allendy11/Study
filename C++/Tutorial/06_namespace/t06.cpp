#include <iostream>
using namespace std;

int n;
void set()
{
  ::n = 10; // 명시적 전역변수 (쓰지않아도 된다.)
}
namespace ns
{
  int n;
  void set()
  {
    ns::n = 20;
    n = 20; // 생략가능
  }
}
namespace ns2
{
  int n;
  void set();
}

int main()
{
  ::set();
  ns::set();
  ns2::set();

  cout << ::n << endl;
  cout << ns::n << endl;
  cout << ns2::n << endl;
}

// 앞에서 선언만 하고 나중에 정의하는것이 가능하다.
namespace ns2
{
  void set()
  {
    n = 30; // 생략가능
  }
}
// 다음과 같이 축약할수 있다.
void ns2::set()
{
  n = 30;
}