#include <iostream>

using namespace std;

class MyClass
{
public:
  void PrintThis()
  {
    cout << "this : " << this << endl;
  }
  // 위와 같다
  void PrintThat(MyClass *ptr)
  {
    cout << "this : " << ptr << endl;
  }
};

int main()
{
  MyClass a;
  MyClass b;
  cout << "a : " << &a << endl;
  cout << "b : " << &b << endl;

  a.PrintThis();
  b.PrintThis();

  a.PrintThat(&a);
  b.PrintThat(&b);

  // 같은 결과
}