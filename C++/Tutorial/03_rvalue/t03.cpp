// 범위 기반 for
// rvalue
// rvalue reference
#include <iostream>
using namespace std;

int main()
{
  int arr[10] = {1, 2, 3, 4, 5};
  // for (int n : arr)
  // {
  //   cout << n << " ";
  //   n++;
  // }
  for (int *n : arr)
  {
    cout << n << " ";
    n++;
  }
  cout << endl;
  for (int n : arr)
  {
    cout << n << " ";
  }
  cout << endl;
}