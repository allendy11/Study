#include <iostream>

using namespace std;

int n;
void set()
{
  n = 10;
}
namespace ns
{
  int n;
  void set()
  {
    n = 20;
  }
  namespace ns2
  {
    int n;
    void set()
    { //  => void ns::ns2::set();
      n = 30;
    }
  }
}
int main()
{
  ::set();
  ns::set();
  ns::ns2::set();

  cout << ::n << endl;
  cout << ns::n << endl;
  cout << ns::ns2::n << endl;
}

// namespace 선언은어디서나 가능하지만 스코프를 조심해야한다.