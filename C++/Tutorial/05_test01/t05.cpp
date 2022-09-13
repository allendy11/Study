// 범위 기반 for문을 사용하여 이차원 배열을 출력하사오

#include <iostream>

using namespace std;

int main()
{
  int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};

  // 코드 작성

  // solve 1
  for (int(&ln)[3] : arr)
  {
    for (int &col : ln)
    {
      cout << col << " ";
    }
    cout << endl;
  }
  // solve 2 (use pointer)
  for (int(*ln)[3] = arr; ln < arr + 2; ln++)
  {
    for (int *c = *ln; c < *ln + 3; c++)
    {
      cout << *c << " ";
    }
    cout << endl;
  }
}