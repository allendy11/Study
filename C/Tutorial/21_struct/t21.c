#include <stdio.h>

int main()
{
  // case 1.
  // typedef struct
  // {
  //   int x, y;
  // } Point;

  // case 2.
  // struct
  // {
  //   int x, y;
  // } p;

  // case 3. 주로 쓰이는 방법
  struct Point
  {
    int x, y;
  };

  Point p;
  p.x = 3;
  p.y = 4;

  printf("%d, %d\n", p.x, p.y); // 3, 4
  printf("%d\n", sizeof(p));    // 8
}

// 객체와 비슷하다