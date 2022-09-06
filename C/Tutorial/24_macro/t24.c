#include <stdio.h>
// 1. 함수를 정의 할수 있다. 띄어쓰기로 구분
#define PRINT_HELLO printf("Hello, World!\n");

// 2. 매그로 변수를 선언할때 괄호가 중요하다.
// #define SQUARE(X) X * X
// #define SQUARE(X) (X * X) // 괄호과 없으면 원하는 결과가 나오지 않을 수 있다.
#define SQUARE(X) ((X) * (X)) // 괄호과 없으면 원하는 결과가 나오지 않을 수 있다.

// 3
#define MAX(A, B) (((A) > (B)) ? (A) : (B))

// 4. 꼭 함수 또는 변수 형태가 아니더라도 특정부분을 정의 하는것이 가능하다
#define FOR(I, S, E) for (int I = S; I < E; I++)
int main()
{
  PRINT_HELLO

  printf("%d\n", SQUARE(5));
  printf("%d\n", 100 / SQUARE(5)); // 100 / 5 * 5 != 100 / (5 * 5)
  printf("%d\n", SQUARE(5 - 1));   // 5 - 1 * 5 - 1 != (5-1) * (5-1)

  FOR(i, 1, 10)
  {
    printf("%d ", i);
  }
}
