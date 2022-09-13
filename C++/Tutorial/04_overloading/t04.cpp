#include <iostream>

using namespace std;

void swap(int &a, int &b)
{
  int tmp = a;
  a = b;
  b = tmp;
}
void swap(double &a, double &b)
{
  double tmp = a;
  a = b;
  b = tmp;
}
void swap(int *(&a), int *(&b))
{ // 참조를 변경;
  int *tmp = a;
  a = b;
  b = tmp;
}
int main()
{
  int a = 20, b = 30;
  double da = 2.22, db = 3.33;
  int *pa = &a, *pb = &b;

  swap(a, b);
  swap(da, db);
  swap(pa, pb);

  cout << "a : " << a << endl;
  cout << "b : " << b << endl;
  cout << "da : " << da << endl;
  cout << "db : " << db << endl;
  cout << "pa : " << pa << endl;
  cout << "pb : " << pb << endl;
}

// 모두 swap 이라는 함수로 중복이 되지만 변수 타입이 다르기때문에
// 알아서 타입에 맞는 함수를 참조하게 된다. 이를 오버로딩이라 한다.
// 사실 흔하게 사용하고 있지만 원리는 잘몰랐던 부분