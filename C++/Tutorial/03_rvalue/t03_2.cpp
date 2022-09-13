#include <iostream>
using namespace std;

int main()
{
  int a = 5;
  cout << a << endl;

  // pointer
  int *p = &a;
  *p = 10;
  cout << a << endl;

  // reference value
  int &r = a;
  r = 20;
  cout << a << endl;
}